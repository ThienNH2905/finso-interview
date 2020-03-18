import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';

import NewsItem from "./NewsItem"

class NewsList extends Component{
    constructor() {
        super();
        this.state = {
            news_list: []
        }

        this.setNewsList = this.setNewsList.bind(this);
        this.getData = this.getData.bind(this);
        this.showData = this.showData.bind(this);
    }

    componentWillMount() {
        // chuan bi data truoc khi render
        this.getData();
    }

    getData() {
        // dung axios goi Rest API lay news list
        axios.get('http://newsapi.org/v2/top-headlines',
        {
            params: {
                country: 'us'
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
        } else {
            return(
                <Col className="mt-3">
                    <h4>Loading...</h4>
                </Col>
            );
        }
        
        return data;
    }

    render(){
        return(
            <Row className="mt-2">
                {this.showData()}
            </Row>
            
        )
    }
}

export default NewsList;