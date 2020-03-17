import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Col 
} from 'reactstrap';

import ModalDetail from "../components/Detail";

const NewsItem = (props) => {
    const {data} = props;
    return(
        <Col sm="12" lg="4">
            <Card>
                <CardImg top width="100%" src={data.urlToImage} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="font-weight-bold">{data.title}</CardTitle>
                    <CardText>{data.description}</CardText>
                    <ModalDetail data={data}/>
                </CardBody>
            </Card>
        </Col>
    )
}

export default NewsItem;