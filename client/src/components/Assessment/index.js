import React, { Component } from "react";
import Question from "../Question/index";
// import '.styles.css';

class Assessment extends Component {
    render() {
        return (
            <div>
                <Question content="What is your favorite food?" />
            </div>
        )
    }
}


export default Assessment;