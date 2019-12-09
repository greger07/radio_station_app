import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="arrow-left">
          <img src="/images/back.png" alt="" />
        </div>
        <div className="title">STATIONS</div>
        <div className="switch right">
          <img src="/images/switch.png" alt="" />
        </div>
      </div>
    );
  }
}
