import React, {Component} from "react";
import AuthHelperMethods from './components/AuthHelperMethods';
import Nav from "./components/Nav/index";
import './login.css'
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Signup extends Component {

    Auth = new AuthHelperMethods();
    
    
    state = {
        username: "",
        email: "",
        password: ""
    }

    _handleChange = (e) => {
        
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )

        console.log(this.state);
    }

    handleFormSubmit = (e) => {

        e.preventDefault();
        
        axios.post("/signup", {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
            .then(data => {
                if (data.data === false) {
                    alert('An account with that name already exists! Choose a different username');
                } else {
                    console.log(data);
                    this.props.history.replace("/login");
                }

            });
        
        
    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                <div className="main-wrapper">
                    <div className="box">
                        <div className="box-header">
                            <h1 className="login-h1">Register</h1>
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
                                placeholder="Email"
                                name="email"
                                type="email"
                                onChange={this._handleChange}
                            />
                            <input
                                className="form-item"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={this._handleChange}
                            />
                            <button type="button" className="form-submit btn btn-dark" onClick={this.handleFormSubmit}>Register</button>
                        </form>
                        <Link className="link" to="/login">Already have an account? <span className="link-signup">Login</span></Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}