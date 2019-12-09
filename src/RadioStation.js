import React, { Component } from "react";

const numberFormat = new Intl.NumberFormat("lt-LT", { style: "decimal" });

export class RadioStation extends Component {
  render() {
    let s = this.props.station;
    let selectedStation = this.props.selectedStation;
    return (
      <div class="station">
        <div class="row">
          {selectedStation === s.id && (
            <div class="station-control">
              <div class="minus">
                <img src="/images/minus.png" alt="" onClick={() => null} />
              </div>
              <div class="radio-logo">
                <img src="/images/station.png" alt="" onClick={() => null} />
              </div>
              <div class="plus right">
                <img src="/images/plus.png" alt="" onClick={() => null} />
              </div>
            </div>
          )}
          <div
            class="station-name"
            onClick={() => this.props.toggleCallback(s)}
          >
            {s.name}
          </div>
          <div class="channel right">{numberFormat.format(s.channel)}</div>
        </div>
      </div>
    );
  }
}
