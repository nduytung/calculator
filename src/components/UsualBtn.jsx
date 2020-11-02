import React from "react";
import ReactDOM from "react-dom";

class UsualBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: this.props.length,
      value: this.props.value,
      color: this.props.color,
      textColor: this.props.textColor,
    };
  }

  render() {
    const { value, color, textColor } = this.state;
    return (
      <div className={this.props.className}>
        <button
          type="button"
          className="btn  border-0  h1 mt-2 mb-2 lead"
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
