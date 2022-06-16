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
            <Form>
                 <FormGroup row>
                    <Label htmtfor="fullname" md={2}>Full Name</Label>
                    <Col md={10}>
                        <Input type="text" name="fullname" value={this.state.firstname} placeholder="Full Name"/>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="telnum" md={2}>Ph Number</Label>
                    <Col md={10}>
                        <Input type="telnum" name="telnum" value={this.state.telnum} placeholder="Phone Number"/>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Input type="email" name="email" value={this.state.email} placeholder="Valid Email"/>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="message" md={2}>Your Feedback</Label>
                    <Col md={10}>
                        <Input type="textarea" name="message" value={this.state.message} placeholder="Your Feedback" rows="6"/>
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