import React, { Component } from "react";
import './heading.css'

class Heading extends Component  {
    render() {
        return (
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="4000" data-pause="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://s3-eu-west-1.amazonaws.com/wbm.thumbnail/dissolve/1200/786088.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://media1.s-nbcnews.com/i/streams/2014/April/140428/2D274905725236-today-kid-homework-140428.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://neatoday.org/wp-content/uploads/2015/04/effects_of_high_stakes_testing-e1429797999258.jpg" alt="Third slide" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Heading;