import React, { Component } from "react";
import './style.css'

class Info extends Component {
    render() {
        return (
            <div className="info-wrapper">
                <div className="info d-flex justify-content-center">
                    <p id="infotext">
                        <span id="infoheading">Welcome to Mathtropolis</span>--a math-only alternative learning geared to make your child truly grasp the basic concepts of math. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <hr />
                <div className="container helpchild d-flex justify-content-center">
                    <h1 className="child-help">How can we help your child?</h1>
                </div>

            </div>
        )
    }
}


export default Info;