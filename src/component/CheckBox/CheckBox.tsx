import React from "react";
import "./CheckBox.scss";

function CheckBox() {
  return (
    <div className="checkbox__wrapper">
      <label className="container">
        <p className="name"></p>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default CheckBox;
