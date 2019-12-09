import React, { Component } from "react";
import { RadioStation } from "./RadioStation";

export class RadioStationTable extends Component {
  render() {
    return (
      <div class="radio-list">
        {this.props.stations.map(s => (
          <RadioStation
            station={s}
            key={s.id}
            selectedStation={this.props.selectedStation}
            toggleCallback={this.props.toggleCallback}
          />
        ))}
      </div>
    );
  }
}
