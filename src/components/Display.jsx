import React from "react";
import ReactDOM from "react-dom";
import "../css/BaseCss.css";
class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-dark text-white p-3 lead display-wrapper">
        <div className="text-left justify-content-center display-fomula">
          {this.props.displayState}
        </div>
        <div className="text-right justify-content-center h1 display-answer">
          {this.props.answer}
        </div>
      </div>
    );
  }
}

export default Display;
