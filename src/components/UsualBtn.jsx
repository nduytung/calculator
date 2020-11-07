import React from "react";
import "../css/BaseCss.css";
import ReactDOM from "react-dom";

class UsualBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      width: this.props.width,
      color: this.props.color,
      equal: this.props.equal,
      textColor: this.props.textColor,
    };
  }

  render() {
    const { value, width, color, textColor } = this.state;
    return (
      <div className={`col-${width} p-0 justify-content-center`}>
        <button
          type="button"
          className={`btn d-block border-0  h1   lead `}
          onClick={() => this.props.updateState(value)}
          style={{
            borderRadius: "25px",
            height: "50px",
            width: "90%",
            backgroundColor: `${color}`,
            color: `${textColor}`,
          }}
        >
          {value}
        </button>
      </div>
    );
  }
}

export default UsualBtn;
