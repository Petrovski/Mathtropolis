import React, { Component } from "react";
import './heading.css'

class Heading extends Component  {
    render() {
        return (
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="7000" data-pause="false">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id="carousel-img" className="d-block w-100" src="https://www.healthline.com/hlcmsresource/images/News/childrens-health/081216_homework_THUMB_LARGE.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-block w-100" src="http://media1.s-nbcnews.com/i/streams/2014/April/140428/2D274905725236-today-kid-homework-140428.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-block w-100" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Operators_%28maths%29_linear.svg/1280px-Operators_%28maths%29_linear.svg.png" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-block w-100" src="http://neatoday.org/wp-content/uploads/2015/04/effects_of_high_stakes_testing-e1429797999258.jpg" alt="Fourth slide" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Heading;