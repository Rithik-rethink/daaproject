import React from "react";
import Login_video from "../media/Login_video.mp4";
import * as ReactBoostrap from "react-bootstrap";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class Login2 extends React.Component {
    state = {
        loginShow: true
    }

    handleLoginClick() {
        this.setState({
            loginShow: true
        })
    }

    handleRegisterClick() {
        this.setState({
            loginShow: false
        })
    }

    render() {
        return(
            <div className = "login2">
                <NavBar/>
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position:"fixed",
                        width:"100%",
                        left:"50%",
                        top:"50%",
                        bottom:"0",
                        height:"100%",
                        objectFit:"cover",
                        transform: "translate(-50%,-50%)",
                        zIndex:"-1"
                    }}
                    >
                    <source src = {Login_video} type = "video/mp4" />
                </video>
                    <div className="content">
                        <ReactBoostrap.Row className="Form">
                            <ReactBoostrap.Col>
                            <ReactBoostrap.Button variant="outline-success" onClick={this.handleLoginClick.bind(this)} >Login</ReactBoostrap.Button>
                            </ReactBoostrap.Col>
                            <ReactBoostrap.Col>
                            <ReactBoostrap.Button variant="outline-primary" onClick={this.handleRegisterClick.bind(this)} >Register</ReactBoostrap.Button>
                            </ReactBoostrap.Col>
                        </ReactBoostrap.Row>
                        <ReactBoostrap.Row>
                            {this.state.loginShow === true ? <LoginForm/>: <RegisterForm/>}
                        </ReactBoostrap.Row>
                        </div>                    
            </div>
        );
    }
}

export default Login2;