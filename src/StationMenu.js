import React, { Component } from 'react';

export class StationMenu extends Component{
    render(){
        return(
            <div className="station-control">
              <div className="minus">
                <img src="/images/minus.png" alt="" onClick={() => null} />
              </div>
              <div className="radio-logo">
                <img src="/images/station.png" alt="" onClick={() => null} />
              </div>
              <div className="plus right">
                <img src="/images/plus.png" alt="" onClick={() => null} />
              </div>
            </div>
        );
    }
}