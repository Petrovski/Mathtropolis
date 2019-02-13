import React from "react";
import "./styles.css";

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a href="/" className="navbar-brand"><img src="https://i.imgur.com/2QSWVJL.png" alt="logo"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbuttons">
                    <ul className="navbar-nav text-right">
                        <li className="nav-item active">
                            <a href="/"><button className="btn btn-success ml-auto mr-2">Home</button></a>
                        </li>
                        <li className="nav-item active">
                            <a href="/register"><button className="btn btn-success ml-auto mr-2">Register</button></a>
                        </li>
                        <li className="nav-item active">
                            <a href="/login"><button className="btn btn-success ml-auto mr-2">Log In</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Nav;