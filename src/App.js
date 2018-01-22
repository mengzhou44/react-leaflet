import React, { Component } from 'react';

import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import logo from './logo.svg';
import './App.css';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/';

class App extends Component {
  render() {



    const position = [51.505, -0.09];

    return (
      <div className="App">

        <Map center={position} zoom={13}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
            </span>
            </Popup>
          </Marker>
        </Map>

      </div>
    );
  }
}

export default App;
