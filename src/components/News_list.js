import React, { Component, useCallback } from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Container, Row, Col 
} from 'reactstrap';

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
                country: 'us',
                apiKey: 'edd3503b0cd74852a25d3d638183b3bb'
            }
        })
        .then((response) => {
            console.log(response.data.articles);
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
                data.push(
                    <Card key={index}>
                        <CardImg top width="100%" src={val.urlToImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button block>Button</Button>
                        </CardBody>
                    </Card>
                )
            })
        }
        
        return data;
    }

    render(){
        return(
            <Row>
                <Col sm="12" lg="4">
                    <h4>Tab 1 Contents</h4>
                    {this.showData()}
                
                </Col>
            </Row>
            
        )
    }
}

export default NewsList;