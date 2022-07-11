import React, { Component } from "react";
import {Form, Button, Input} from 'reactstrap';
import {connect} from 'react-redux';

//define dispatch function
const mapDispatchToProps = dispatch => {
    return{
        addComment: (dishId, author, rating, comment) => dispatch({
            type: 'ADD_COMMENT',
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
              }
        })
    }
}

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleInputChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
handleSubmit = e => {
    //console.log(this.state);  
    //dispatch function call
    this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment);

    this.setState({
        author: '',
        rating: '',
        comment: ''
    });
    e.preventDefault();
}

    render(){
        //console.log(this.props);
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                    type="text"
                    name="author" 
                    value={this.state.author}
                    placeholder="Your Name" 
                    onChange={this.handleInputChange} 
                    required/>
                    <br/>
                    <Input 
                    type="select"
                    name="rating" 
                    value={this.state.rating}
                    placeholder="Your rating" 
                    onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br/>
                    <Input 
                    type="textarea"
                    name="comment" 
                    value={this.state.comment}
                    placeholder="Your Comment" 
                    onChange={this.handleInputChange}
                    required/>
                    <br/>
                    <Button type="submit">Comment Submit</Button>
                </Form>
            </div>
        )
    }
}

export default connect (null, mapDispatchToProps) (CommentForm);