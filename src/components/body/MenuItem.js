import React from 'react';
import {Card, CardTitle, CardImg, CardImgOverlay, CardBody, CardText} from "reactstrap";

const MenuItem = props => {
    return (
        <div>
            <Card style={{
                margin: "10px"
            }}>
                <CardBody>
                    <CardImg src={props.dish.image} width="100%" height="200px" alt={props.dish.name}
                    style={{
                        opacity: "0.5"
                    }}/>
                    <CardImgOverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText style={{
                            cursor: "pointer"
                        }} onClick={props.DishSelect}>View Detail</CardText>
                    </CardImgOverlay>
                </CardBody>
            </Card>
            
        </div>
    );
};

export default MenuItem;