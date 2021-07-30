import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="bg">
          <h2 className="head2">
            G2 Academy <hr></hr>
          </h2>
          <hr />
        </div>
      </>
    );
  }
}

export default Header;
