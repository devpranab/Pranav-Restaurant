import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import {LocalForm, Control, Errors} from 'react-redux-form';

//Validation method start
//return true or false depends on condition
const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
//Validation method end

class Contact extends Component {

    //handleSubmit function
    handleSubmit = values => {
     console.log(values);
    }

    render(){
        document.title = "Contact";
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
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                 <FormGroup row>
                    <Label htmtfor="fullname" md={2}>Full Name</Label>
                    <Col md={10}>
                        <Control.text 
                        model=".fullname" 
                        name="fullname"
                        placeholder="Full Name"
                        className="form-control"
                        validators={{required}}
                        />
                    <Errors 
                    className="text-danger"
                    model=".fullname"
                    show="touched"
                    messages={
                        {required: "Required"}
                    }/>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="telnum" md={2}>Phn Number</Label>
                    <Col md={10}>
                        <Control.text
                        model=".telnum" 
                        name="telnum" 
                        placeholder="Phone Number"
                        className="form-control"
                        validators={{required, isNumber}}
                        />

                    <Errors 
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={
                        {required: "Required, ", isNumber: "Invalid Number!"}
                    }/>

                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Control.text 
                        model=".email" 
                        name="email" 
                        placeholder="Valid Email"
                        className="form-control"
                        validators={{required, validEmail}}
                        />

                        <Errors 
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages={
                            {required: "Required, ", validEmail: "Invalid Email!"}
                        }/>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Col md={{size: 6, offset: 2}}>
                        <FormGroup check>
                            <Label check>
                                <Control.checkbox 
                                model=".agree" 
                                name="agree"
                                className="form-check-input"
                                />
                                 <strong>May we contact you?</strong>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={{size: 3, offset: 1}}>
                        <Control.select 
                        model=".contactType"
                        name="contactType"
                        className="form-control">
                            <option>Tel.</option>
                            <option>Email</option>
                        </Control.select>
                    </Col>
                 </FormGroup>
                 <FormGroup row>
                    <Label htmtfor="message" md={2}>Your Feedback</Label>
                    <Col md={10}>
                        <Control.textarea 
                        model=".message" 
                        name="message" 
                        placeholder="Your Feedback" 
                        rows="6"
                        className="form-control"
                        validators={{required}}
                        />

                        <Errors 
                        className="text-danger"
                        model=".message"
                        show="touched"
                        messages={
                            {required: "Required"}
                        }/>

                    </Col>
                 </FormGroup>
              <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary">Submit</Button>
                </Col>
              </FormGroup>
                
            </LocalForm>
        </div>
     </div>
    </div>
  );
 }
};

export default Contact;