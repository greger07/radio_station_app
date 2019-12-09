import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {this.props.selectedStation !== -1 && (
          <div className="footer-box">
            <div className="playing">CURRENTLY PLAYING</div>
            <div className="selected-station">{this.props.selectedStationName}</div>
          </div>
        )}
      </div>
    );
  }
}
