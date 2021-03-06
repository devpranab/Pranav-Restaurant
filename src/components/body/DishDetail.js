import React from 'react';
import {Card, CardTitle, CardImg, CardBody, CardText} from "reactstrap";
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { baseURL } from '../../redux/baseURL';

const DishDetail = props => {
    return (
        <div>
            <Card style={{
                marginTop: "10px"
            }}>
                <CardImg top src={baseURL + props.dish.image}/>
                <CardBody style={{
                    textAlign: "left"
                }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price} /-</CardText>
                    <CardText><a href="/">Order Now</a></CardText>

                    <hr/>

                    <LoadComments comments={props.comments} commentsIsLoading={props.commentsIsLoading}/>
                    <hr/>
                    <CommentForm dishId={props.dish.id} addComment={props.addComment}/>

                </CardBody>
            </Card>
            
        </div>
    );
};

export default DishDetail;