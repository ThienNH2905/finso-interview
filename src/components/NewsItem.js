import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Col 
} from 'reactstrap';

import ModalDetail from "../components/Detail";

const NewsItem = (props) => {
    const {data} = props;
    return(
        <Col sm="12" lg="4" className="my-3">
            <Card className="h-100">
                <div className="thumb-wrap">
                    <img src={data.urlToImage} alt={data.title} />
                </div>
                <CardBody className="d-flex flex-column justify-content-between">
                    <div>
                        <CardTitle className="font-weight-bold">
                            {data.title}
                        </CardTitle>
                        <CardText>{data.description}</CardText>
                    </div>
                    <ModalDetail data={data}/>
                </CardBody>
            </Card>
        </Col>
    )
}

export default NewsItem;