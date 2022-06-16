import React from 'react';
import {Card, CardTitle, CardImg, CardImgOverlay, CardBody} from "reactstrap";

const MenuItem = props => {
    //console.log(props);
    return (
        <div>
            <Card style={{
                margin: "10px"
            }}>
                <CardBody>
                    <CardImg src={props.dish.image} width="100%" alt={props.dish.name}
                    style={{
                        opacity: "0.5"
                    }}/>
                    <CardImgOverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
            
        </div>
    );
};

export default MenuItem;