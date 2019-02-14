import React, { Component } from 'react';
import ChartContainer from './ChartContainer/index';
import Nav from './Nav/index';
import AuthHelperMethods from './AuthHelperMethods';
import withAuth from './withAuth';


class Dashboard extends Component {

    Auth = new AuthHelperMethods();

    /* Create a new instance of the 'AuthHelperMethods' compoenent*/
    state = {
        username: "",
        password: ""
    }

    /* Here will want to add a method to log the user out upon clicking 'Logout' */
    _handleLogout = () => {

        this.Auth.logout()
        this.props.history.replace('/login');
    }

    //Render the protected component
    render() {
        let name = null;

        //This will be null until we set up authentication...
        if (this.props.confirm) {
            name = this.props.confirm.username;
        }

        return (
            <div className="App">
                <Nav />
                <div className="main-page">
                    <div className="top-section">
                        <h1>Welcome to your dashboard {name}</h1>

                        <button className="btn btn-danger" onClick={this._handleLogout}>LOGOUT</button>

                    </div>
                    <div className="container">
                    <h1 className="cprogress">Ciricuulum Progress</h1>
                        <div className="container" id="currentcourse">
                        <h3>You are currently on course *course number* within the grade *grade number* section</h3>
                    </div>
                    <hr />
                    <div className="container">
                        <p>Grade: A+</p>
                        <p>Grade: A+</p>
                        <p>Grade: A+</p>
                    </div>
                    </div>

                    <div className="bottom-section">
                        <button className="btn btn-success">Continue Course</button>
                    </div>

                    <div className="bottom-section">
                        <button className="btn btn-success">Switch Course</button>
                    </div>
                </div>

                <ChartContainer />
            </div>
        );
    }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.
export default withAuth(Dashboard);
