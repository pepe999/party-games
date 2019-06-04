import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hello } from "./containers/Hello";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Hello} />
            <Route path="/hello" component={Hello} />
          </div>
        </Router>
    </div>
  );
}

export default App;
