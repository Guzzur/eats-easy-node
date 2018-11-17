import React, { Component } from "react";
import Version from "./components/version/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Version />
      </div>
    );
  }
}

export default App;
