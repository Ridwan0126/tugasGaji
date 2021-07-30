import React, { Component } from "react";
import "./input.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { focusState, name, typeTx, defaultValue } = this.props;
    return (
      <>
        <div
          className={`input-div${focusState[`isFocus${name}`] ? " focus" : ""}`}
        >
          <div>
            <input
              id={`isFocus${name}`}
              className="input"
              type={typeTx}
              name={name.toLowerCase()}
              defaultValue={defaultValue}
              placeholder={name}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
