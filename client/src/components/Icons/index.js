import React from "react";
import "./style.css";

class Icons extends React.Component {
    render() {
        return (
            <section className="features-icons bg-light text-center" id="icons">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="fas fa-hands-helping faa-tada animated"></i>
                                </div>
                                <h3>Math Help</h3>
                                <p className="lead mb-0">Catch up, learn for understanding, and get ahead in math</p>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="fab fa-leanpub"></i>
                                </div>
                                <h3>Alternative Learning Methods</h3>
                                <p className="lead mb-0">Unique ways to learn that really help students grasp the content easily</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="fas fa-user-friends"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p className="lead mb-0">Built with the user in mind to make navigation intuitive and easy to use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Icons;