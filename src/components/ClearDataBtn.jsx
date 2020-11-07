import React from "react";
import "../css/BaseCss.css";
import ReactDOM from "react-dom";

class ClearDataBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`col-12 p-0 justify-content-center`}>
        <button
          type="button"
          className={`btn btn-info border-0  h1   lead `}
          onClick={() => this.props.handleClearData()}
          style={{
            borderRadius: "25px",
            height: "50px",
            width: "100%",
          }}
        >
          Clear Data
        </button>
      </div>
    );
  }
}

export default ClearDataBtn;
