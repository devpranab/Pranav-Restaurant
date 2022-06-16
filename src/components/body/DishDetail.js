import React from 'react';
import {Card, CardTitle, CardImg, CardBody, CardText} from "reactstrap";

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

                </CardBody>
            </Card>
            
        </div>
    );
};

export default DishDetail;