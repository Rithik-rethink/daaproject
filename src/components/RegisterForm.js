import React from "react";
import * as ReactBoostrap from "react-bootstrap";

class LoginForm extends React.Component {
    state = {
        username: "",
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
        else if(element === "username") {
            this.setState({
                username: value
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
                <ReactBoostrap.Form inline className = "Form1" >
                    <ReactBoostrap.FormControl type="text" placeholder="Username" className="Loginusername" onChange={(event) => this.handleChange(event, "username")}/>
                    <ReactBoostrap.FormControl type="text" placeholder="Email" className="Loginemail" onChange={(event) => this.handleChange(event, "email")}/>
                    <ReactBoostrap.FormControl type="password" placeholder="Password" className="Loginpassword" onChange={(event) => this.handleChange(event, "password")}/>
                    <ReactBoostrap.Button variant = "primary" className = "RegisterButton" onClick={this.handleClick.bind(this)} href="/welcome">Register</ReactBoostrap.Button> 
                </ReactBoostrap.Form> 
        );
    }
}

export default LoginForm;