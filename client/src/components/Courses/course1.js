import React from "react";
import Nav from '../Nav/index';

class Course1 extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="container course-container">
                    <a href="/dashboard"><button className="course-buttons btn btn-info"><h2 className="course-selections">Back to Dashboard</h2></button></a>
                    <h1 className="course-heading">Welcome to Course A</h1>
                    <hr />
                    <div className="container">
                        <h4>In this course we are going to be going over the basics of math operation. These are addition, subtraction, multiplication, and divison.</h4>
                        <img className="math-chart" src="https://i.imgur.com/BB03vec.png" alt="math chart"></img>
                        <h4>Always refer back to this chart if you get stuck on any of the problems in the course!</h4>
                    </div>

                    <div className="example-container">
                        <h4>Lets start off by teaching the easiest way to do simple addition on a somewhat seemingly hard problem.</h4>
                        <h4>When you are thinking about doing addition or subtraction, always try to think of the closest whole number.</h4>
                        <h4>For example, lets take a look at this type of problem:</h4>
                        <h4><strong>99 + 99 + 99 = ____</strong></h4>
                        <h4>Instead of solving this as the usual vertical addition problem, lets think about it this way, <strong>“100 + 100 + 100 = 300 - 3 = 297.” </strong>
                            It’s a different way to look at problems that can be very helpful and productive.</h4>
                    </div>
                </div>
               
            </div>
        )
    }

}

export default Course1;