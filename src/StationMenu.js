import React, { Component } from 'react';

export class StationMenu extends Component{
    render(){
        return(
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
        );
    }
}