import React, { Component } from 'react';
// import AuthHelperMethods from './components/AuthHelperMethods';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/index";
import Icons from "./components/Icons/index";
import Heading from "./components/Heading/index";
import Info from "./components/Info/index"
import './App.css';


class App extends Component {

//   Auth = new AuthHelperMethods();

//   /* Create a new instance of the 'AuthHelperMethods' compoenent*/
//   state = {
//     username: "",
//     password: ""
//   }

// /* Here will want to add a method to log the user out upon clicking 'Logout' */
//   _handleLogout = () => {
    
//     this.Auth.logout()
//     this.props.history.replace('/login');
//   }

  //Render the protected component
  render() {
    // let name = null;

    // //This will be null until we set up authentication...
    // if (this.props.confirm) {
    //   name = this.props.confirm.username;
    // }

    return (
      <div>
        <Nav />
        <Heading />
        <Info />
        <Icons />
      </div>
    );
  }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.
export default App;
