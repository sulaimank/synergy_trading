import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={{ backgroundColor: "#407BFF" }} className="main-footer">
          <strong style={{ color: "white" }}>Copyright © 2022</strong>

          <div className="float-right d-none d-sm-inline-block">
            <b style={{ color: "white" }}>Version 3.0.0</b>
          </div>
        </footer>
      </div>
    );
  }
}
