import React from "react";
import * as ReactBoostrap from "react-bootstrap";

class LoginForm extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleChange(event, element) {
        var value = event.currentTarget.value
        if(element === "email") {
            this.setState({
                email: value
            })
        }
        else {
            this.setState({
                password: value
            })
        }
    }

    handleClick(event) {
        console.log(this.state);
    }

    render() {
        return(
                <ReactBoostrap.Form inline className = "Form" >
                    <ReactBoostrap.FormControl type="text" placeholder="Email" className="Loginemail" onChange={(event) => this.handleChange(event, "email")}/>
                    <ReactBoostrap.FormControl type="password" placeholder="Password" className="Loginpassword" onChange={(event) => this.handleChange(event, "password")}/>
                    < a href="/">Forgot Password</a>
                    <ReactBoostrap.Button variant = "success" className = "LoginButton" onClick={this.handleClick.bind(this)} href="/welcome">Login</ReactBoostrap.Button> 
                </ReactBoostrap.Form> 
        );
    }
}

export default LoginForm;