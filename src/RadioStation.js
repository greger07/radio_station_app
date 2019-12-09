import React, { Component } from "react";
import {StationMenu} from "./StationMenu";
const numberFormat = new Intl.NumberFormat("lt-LT", { style: "decimal" });

export class RadioStation extends Component {
  render() {
    let s = this.props.station;
    let selectedStation = this.props.selectedStation;
    return (
      <div className="station">
        <div className="row">
          {selectedStation === s.id && <StationMenu />}
          <div
            className="station-name"
            onClick={() => this.props.toggleCallback(s)}
          >
            {s.name}
          </div>
          <div className="channel right">{numberFormat.format(s.channel)}</div>
        </div>
      </div>
    );
  }
}
