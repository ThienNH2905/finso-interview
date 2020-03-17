import React, { Component } from 'react';
import { 
    Row, Col, Button, 
    Form, FormGroup, Label, 
    Input, Alert  
} from 'reactstrap';

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            submit_msg: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userFromLocalStorage = this.userFromLocalStorage.bind(this);
        this.getValue = this.getValue.bind(this);
    }


    componentWillMount() {
        let user = this.userFromLocalStorage();
        if(user)
            this.setState({user});
    }


    handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        let user_date = JSON.stringify(Object.fromEntries(formData))
        localStorage.setItem("user", user_date);
        this.setState({submit_msg: "ahuhuuu"})
    }

    userFromLocalStorage() {
        let user = localStorage.getItem("user");
        if (user)
            return JSON.parse(localStorage.getItem("user"))
        return null
    }

    getValue(key) {
        if(this.state.user)
            return this.state.user[key];
        return "";
    }

    render(){
        return(
            <Row>
                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="userName">Username</Label>
                            <Input type="text" name="userName" defaultValue={this.getValue("userName")} id="userName" placeholder="Username" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="fullName">Full Name</Label>
                            <Input type="text" name="fullName" defaultValue={this.getValue("fullName")} id="fullName" placeholder="Full Name" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" defaultValue={this.getValue("email")} placeholder="Email" />
                        </FormGroup>

                        <Button type="submit">Submit</Button>

                        { this.state.submit_msg &&
                            <Alert color="success">
                                {this.state.submit_msg}
                            </Alert>
                        }
                    </Form>
                </Col>
            </Row>
            
        )
    }
}

export default Profile;