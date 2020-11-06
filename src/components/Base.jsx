import React from "react";
import ReactDOM from "react-dom";
import Display from "./Display";
import "../css/BaseCss.css";
import UsualBtn from "./UsualBtn";
import ClearDataBtn from "./ClearDataBtn";
var stringMath = require("string-math");

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extendVal: ["(", ")", ".", "^"],
      numberVal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      featureVal: ["+", "-", "*", "/"],
      displayState: "",
      answer: 0,
    };
  }

  //------------- HANDLE FUNCTIONS ---------------------------

  // update the value of the screen on button is clicked
  updateDisplayState = (newState) => {
    this.setState({ displayState: this.state.displayState + newState });
  };

  //handle the output on user click on "="
  handleCalculating = () => {
    let input = this.state.displayState;
    let answer = stringMath(input);
    this.setState({ answer: answer });
  };

  //handle when user click on clear data
  handleClearData = () => {
    this.setState({ displayState: " ", answer: 0 });
  };

  //function to render multiple alike components
  //push everything u want to render into an array, and return it
  renderBtn = (list, width, color, equal = 0, textColor = "white") => {
    let arr = [];
    list.map((item) => {
      arr.push(
        <UsualBtn
          value={item}
          width={width}
          color={color}
          equal={equal}
          textColor={textColor}
          updateState={this.updateDisplayState}
        />
      );
    });

    if (equal == 1)
      arr.push(
        <UsualBtn
          value={"="}
          width={8}
          color={color}
          textColor={textColor}
          updateState={this.handleCalculating}
        />
      );

    return arr;
  };

  //-----------------------------------------------------------

  render() {
    const {
      extendVal,
      numberVal,
      featureVal,
      displayState,
      answer,
    } = this.state;
    return (
      <div className="calc-wrapper bg-dark p-4 m-auto mt-3">
        <Display displayState={displayState} answer={answer} />
        <div className="row col-12 m-0 p-0">
          <ClearDataBtn handleClearData={this.handleClearData} />
          {this.renderBtn(extendVal, "3", "#73d673")}
        </div>
        <div className="row p-0 m-0 justify-content-between">
          <div className="row col-9 m-0 p-0">
            {this.renderBtn(numberVal, "4", "white", 1, "black")}
          </div>
          <div className="col-3 m-0 p-0">
            {this.renderBtn(featureVal, "12", "darkorange")}
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
