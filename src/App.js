import "./App.css";
import React from "react";
import { RadioStationTable } from "./RadioStationTable";
import { Header } from "./Header";
import { Footer } from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStation: -1,
      selectedStationName: null
    };
  }

  getStations() {
    const stations = [
      {
        id: 1,
        name: "Putin FM",
        channel: 66.6
      },
      {
        id: 2,
        name: "Dribbble FM",
        channel: 101.2
      },
      {
        id: 3,
        name: "Doge FM",
        channel: 99.4
      },
      {
        id: 4,
        name: "Ballads FM",
        channel: 87.1
      },
      {
        id: 5,
        name: "Maximum FM",
        channel: 142.2
      }
    ];
    return stations;
  }

  openStation(station) {
    this.setState({
      selectedStation:
        this.state.selectedStation === station.id ? -1 : station.id,
      selectedStationName: station.name
    });
  }

  render() {
    const stations = this.getStations();
    return (
      <div id="app">
        <Header />
        <RadioStationTable
          stations={stations}
          selectedStation={this.state.selectedStation}
          toggleCallback={s => this.openStation(s)}
        />
        <Footer
          selectedStation={this.state.selectedStation}
          selectedStationName={this.state.selectedStationName}
        />
      </div>
    );
  }
}

export default App;
