import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6} country="in" />
      </div>
    );
  }
}

export default App;

// api key:635dd6693f61488c9feddd080ffe0113
