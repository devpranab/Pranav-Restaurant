import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
        //bind
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleInputChange function
    handleInputChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    //handleSubmit function
    handleSubmit = e => {
        console.log(this.state);
     e.preventDefault();
    }

    render(){
    return (
        <div className="container">
        <div className="row row-content" style={{
            paddingLeft: "20px",
            textAlign: "left"
        }}>
        <div className="col-12">
            <h3 style={{
                padding: "25px"
            }}>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-7">
            <Form onSubmit={this.handleSubmit}>
                 <FormGroup row>
                    <Label htmtfor="fullname" md={2}>Full Name</Label>
                    <Col md={10}>
                        <Input type="text" name="fullname" value={this.state.fullname} placeholder="Full Name" 
                        onChange={this.handleInputChange}/>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="telnum" md={2}>Phn Number</Label>
                    <Col md={10}>
                        <Input type="telnum" name="telnum" value={this.state.telnum} placeholder="Phone Number"
                         onChange={this.handleInputChange}/>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Input type="email" name="email" value={this.state.email} placeholder="Valid Email" onChange={this.handleInputChange}/>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Col md={{size: 6, offset: 2}}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="agree" checked={this.state.agree}
                                onChange={this.handleInputChange}/> <strong>May we contact you?</strong>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={{size: 3, offset: 1}}>
                        <Input type="select" name="contactType" value={this.state.contactType}
                        onChange={this.handleInputChange}>
                            <option>Tel.</option>
                            <option>Email</option>
                        </Input>
                    </Col>


                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="message" md={2}>Your Feedback</Label>
                    <Col md={10}>
                        <Input type="textarea" name="message" value={this.state.message} placeholder="Your Feedback" rows="6" onChange={this.handleInputChange}/>
                    </Col>
                 </FormGroup>
              <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary">Submit</Button>
                </Col>
              </FormGroup>
                
            </Form>
        </div>
     </div>
    </div>
  );
 }
};

export default Contact;