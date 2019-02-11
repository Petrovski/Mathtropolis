import React, { Component } from 'react';
// import AuthHelperMethods from './components/AuthHelperMethods';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/index";
import Icons from "./components/Icons/index";
import Heading from "./components/Heading/index";
import Info from "./components/Info/index"
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        nintendo: 0,
        microsoft: 0,
        sony: 0
      },
      result: ''
    };
  }


  render() {
    return (
      <div>
        <Nav />
        <Heading />
        <Info />
        <Icons />
      </div>
    );
  }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.
export default App;
