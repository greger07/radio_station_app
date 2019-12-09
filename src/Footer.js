import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div class="footer">
        {this.props.selectedStation !== -1 && (
          <div class="footer-box">
            <div class="playing">CURRENTLY PLAYING</div>
            <div class="selected-station">{this.props.selectedStationName}</div>
          </div>
        )}
      </div>
    );
  }
}
