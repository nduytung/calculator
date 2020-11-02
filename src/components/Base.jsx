import React from "react";
import ReactDOM from "react-dom";
import UsualBtn from "./UsualBtn";
import Display from "./Display";
class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extendVal: ["(", ")", ".", "^"],
      numberVal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      featureVal: [" + ", " - ", " x ", " / "],
      displayState: [],
    };
  }

  renderBtn = (list, width, color, equal = 0, textColor = "white") => {
    let arr = [];
    list.map((item) => {
      arr.push(
        <UsualBtn
          className={`col-${width} p-0 justify-content-between`}
          length="1"
          value={item}
          color={color}
          textColor={textColor}
          onClick={this.handleDisplay}
        />
      );
    });

    if (equal == 1)
      arr.push(
        <UsualBtn
          className={`col-8 p-0 justify-content-between`}
          length="2"
          value="="
          color={color}
          textColor={textColor}
        />
      );
    return arr;
  };

  handleDisplay = (value) => {
    let immeState = value;
    this.setState({ displayState: this.state.displayState + immeState });
  };
  render() {
    const { extendVal, numberVal, featureVal, displayState } = this.state;
    return (
      <div
        style={{ width: "350px", height: "600px", borderRadius: "15px" }}
        className="bg-dark container p-4 mt-3"
      >
        {/* MÀN HÌNH HIỂN THỊ  */}
        <Display answer="0000000" displayContent={displayState} />

        {/* KHU VỰC CÁC PHÍM */}
        <div className="row col-12 m-0 p-0">
          {/* PHÍM CHỨC NĂNG  */}
          {this.renderBtn(extendVal, "3", "#73d673")}
        </div>
        <div className="row p-0 m-0 justify-content-between">
          <div className="row col-9  m-0 p-0">
            {/* PHÍM SỐ VÀ DÂU = */}
            {this.renderBtn(numberVal, "4", "white", 1, "black")}
          </div>
          <div className="col-3 m-0 p-0">
            {/* CÁC PHÍM TÍNH TOÁN CƠ BẢN */}
            {this.renderBtn(featureVal, "12", "darkorange")}
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
