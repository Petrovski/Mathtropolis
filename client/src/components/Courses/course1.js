import React from "react";
import Nav from '../Nav/index';

class Course1 extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="container course-container">
                    <a href="/dashboard"><button className="course-buttons btn btn-info"><h2 className="course-selections">Back to Dashboard</h2></button></a>
                    <h1 class="course-heading">Welcome to Course A</h1>
                    <hr />
                    <div className="container">
                        <h4>In this course we are going to be going over the basics of math operation. This consist of addition, subtraction, multiplication, and divison.</h4>
                        <img src="https://i.imgur.com/BB03vec.png"></img>
                        <h4>In this course we are going to be going over the basics of math operation. This consist of addition, subtraction, multiplication, and divison.</h4>
                    </div>
                </div>
            </div>
        )
    }

}

export default Course1;