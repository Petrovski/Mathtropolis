import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Result = props => {
    return (
        <div className="result">

            <h1 id="thank-you">Thank you for taking our assessment</h1>
            <h2 className="h2-result" id="result-text">We recommend you start with Course <strong>{props.quizResult}</strong>!</h2>
            <h2 className="h2-result" id="register-text">Register now for a free account now to get free access to your course, and many other courses!</h2>
            
            <a href="/register"><button id="result-btn" className="btn btn-success ml-auto mr-2">Register</button></a>
            <a href="/login"><button id="result-btn" className="btn btn-success ml-auto mr-2">Log In</button></a>

      </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;