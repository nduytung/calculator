import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Base from "./components/Base";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Base />;
  }
}

export default App;
