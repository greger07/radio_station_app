import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="arrow-left">
          <img src="/images/back.png" alt="" />
        </div>
        <div class="title">STATIONS</div>
        <div class="switch right">
          <img src="/images/switch.png" alt="" />
        </div>
      </div>
    );
  }
}
