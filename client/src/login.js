import React, { Component } from "react";
import AuthHelperMethods from './components/AuthHelperMethods';
import Nav from "./components/Nav/index";


/* We want to import our 'AuthHelperMethods' component in order to send a login request */

import { Link } from 'react-router-dom';
import './login.css'


class Login extends Component {

    Auth = new AuthHelperMethods();

    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */

    state = {
        username: "",
        password: ""
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.replace("/dashboard");
            })
            .catch(err => {
                alert(err);
            });
    }

    componentWillMount() {

        /* Here is a great place to redirect someone who is already logged in to the protected route */
        
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/dashboard');
        }
    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                <div className="main-wrapper">
                    <div className="box">
                        <div className="box-header">
                            <h1 className="login-h1">Login</h1>
                        </div>
                        <form className="box-form">
                            <input
                                className="form-item"
                                placeholder="Username"
                                name="username"
                                type="text"
                                onChange={this._handleChange}
                            />
                            <input
                                className="form-item"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={this._handleChange}
                            />
                            <button className="form-submit btn btn-dark" onClick={this.handleFormSubmit}>Login</button>
                        </form>
                        <Link className="link" to="/register">Don't have an account? <span className="link-signup">Register</span></Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Login;