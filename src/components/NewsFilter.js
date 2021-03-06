import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Input } from 'reactstrap';

import NewsItem from "./NewsItem"

class NewsFilter extends Component{
    constructor() {
        super();
        this.state = {
            news_list: []
        }

        this.setNewsList = this.setNewsList.bind(this);
        this.getData = this.getData.bind(this);
        this.showData = this.showData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    getData(val='bitcoin') {
        // dung axios goi Rest API lay news list 
        axios.get('http://newsapi.org/v2/everything', {
        params: {
            q: val
        }
        })
        .then((response) => {
            this.setNewsList(response.data.articles);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    setNewsList(data) {
        this.setState({news_list: data});
    }

    showData() {
        let data = [];
        if (this.state.news_list.length > 0) {
            this.state.news_list.map((val, index) => {
                return data.push(
                    <NewsItem key={index} data={val}/>
                )
            })
            return data;
        } else {
            return(
                <Col className="mt-3">
                    <h4>Loading...</h4>
                </Col>
            );
        }
        
        
    }

    handleChange(e){
        // dat new_list ve []  de chay loader
        this.setState({news_list: []});
        this.getData(e.target.value);
    }

    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <Input type="select" name="select" onChange={ this.handleChange } className="w-auto mt-4">
                            <option value='bitcoin'>Bitcoin</option>
                            <option value='apple'>Apple</option>
                            <option value='earthquake'>Earthquake</option>
                            <option value='animal'>Animal</option>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    
                    {this.showData()}
                </Row>
            </div>
        )
    }
}

export default NewsFilter;