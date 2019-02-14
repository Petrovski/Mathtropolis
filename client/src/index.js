import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import Register from './signup';
import Dashboard from "./components/dashboard";
import Courses from './components/Courses/index'
// import Welcome from "./components/welcome";
import registerServiceWorker from './registerServiceWorker';
import QuizContainer from './components/QuizContainer/index';

/* Here we will create our routes right off the bat in order to 
prevent the user from getting very far in our app without authentication. */
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/assessment" component={QuizContainer} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/courses" component={Courses} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
