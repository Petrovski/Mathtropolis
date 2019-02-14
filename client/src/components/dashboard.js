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
                        <h1 id="dashboard-heading">Welcome to your dashboard, {name}</h1>
                        <button className="logout-btn btn btn-danger" onClick={this._handleLogout}>LOGOUT</button>
                    </div>
                    <div className="container">
                    <h2 className="cprogress">Ciricuulum Progress</h2>
                    <hr />
                    </div>
                    <div className="row">
                        <div className="bottom-section">
                            <a href="/courses"><button className="course-btn btn btn-success">Select Course</button></a>
                        </div>

                        <div className="bottom-section">
                            <button className="course-btn btn btn-success">Continue Course</button>
                        </div>
                    </div>
                </div>

                <ChartContainer />
            </div>
        );
    }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.
export default withAuth(Dashboard);
