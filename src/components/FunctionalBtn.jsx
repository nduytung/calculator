import React from "react";
import ReactDOM from "react-dom";
import UsualBtn from "./UsualBtn";

class FunctionalBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: this.props.feature,
      length: this.props.length,
      value: this.props.value,
      color: this.props.color,
      firstNumber: this.props.firstNumber,
      secondNumber: this.props.secondNumber,
    };
  }

  render() {
    const { length, value, color } = this.state;
    return <UsualBtn length={length} value={value} color={color} />;
  }
}
