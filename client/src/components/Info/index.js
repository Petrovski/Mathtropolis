import React, { Component } from "react";
import './style.css'

class Info extends Component {
    render() {
        return (
            <div className="info-wrapper">
                <div className="info d-flex justify-content-center">
                    <p id="infotext">
                        <span id="infoheading">Welcome to Mathtropolis</span>--a math-only, supplemental learning program geared to make your child truly grasp the basic concepts of math. 
                        The basics of math are the core and foundation of any childs future, regardless of what profession they choose when they grow up.
                        Our program is designed with the individual in mind, asessing personal needs and current intelligence in math.
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