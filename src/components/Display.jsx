import React from "react";
import ReactDOM from "react-dom";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: this.props.displayContent,
      answer: this.props.answer,
    };
  }

  render() {
    const { answer, displayContent } = this.state;
    return (
      <div
        style={{ width: "100%", height: " 200px" }}
        className="bg-dark text-white p-3 lead"
      >
        <div
          style={{ height: "120px" }}
          className="text-left justify-content-center"
        >
          {displayContent}
        </div>
        <div
          style={{ height: "80px" }}
          className="text-right justify-content-center h1"
        >
          {answer}
        </div>
      </div>
    );
  }
}

export default Display;
