import React from "react";
import Nav from '../Nav/index';

class Courses extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="container course-container">
                    <a href="/dashboard"><button className="course-buttons btn btn-info"><h2 className="course-selections">Back to Dashboard</h2></button></a>
                    <h1 class="course-heading">Select your course:</h1>
                    <div className="col-sm buttons-container">
                        <a href="/courses/1" className=""><button className="course-buttons btn btn-dark"><h2 className="course-selections">Course A</h2></button></a>
                        <a><button className="course-buttons btn btn-dark"><h2 className="course-selections">Course B</h2></button></a>
                        <a><button className="course-buttons btn btn-dark"><h2 className="course-selections">Course C</h2></button></a>
                        <a><button className="course-buttons btn btn-dark"><h2 className="course-selections">Course D</h2></button></a>
                        <a><button className="course-buttons btn btn-dark"><h2 className="course-selections">Course E</h2></button></a>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default Courses;