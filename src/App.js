import React, { Component } from 'react';
import './App.css';
import {
  SideNav,
  About,
  Experience,
  Education,
  Interests,
  Skills,
  Work
} from './components';

class App extends Component {
  render() {
    // var mobile_fix = '<div className="d-none d-xs-block mobile-fix">&nbsp;</div>';
    return (
      <div className="d-block">
        <SideNav />
        <div className="container-fluid p-0" data-spy="scroll" data-target=".navbar">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Interests />
          <Work />
        </div>
      </div>
    );
  }
}

export default App;
