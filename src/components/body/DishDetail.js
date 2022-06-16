import React from 'react';
import {Card, CardTitle, CardImg, CardBody, CardText} from "reactstrap";
import LoadComments from './LoadComments';

const DishDetail = props => {
    return (
        <div>
            <Card style={{
                marginTop: "10px"
            }}>
                <CardImg top src={props.dish.image}/>
                <CardBody style={{
                    textAlign: "left"
                }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price} /-</CardText>
                    <CardText><a href="/">Order Now</a></CardText>

                    <hr/>

                    <LoadComments comments={props.dish.comments}/>

                </CardBody>
            </Card>
            
        </div>
    );
};

export default DishDetail;