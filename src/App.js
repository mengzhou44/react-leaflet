import React, { Component } from "react";


import ExampleAnimate from "./example-animate";
import ExampleNormal from "./example-normal";
import ExampleBounds from "./example-bounds";
import ExampleCustomComponent from "./example-custom-component";
import ExampleDraggableMarker from "./example-draggable-marker";
import ExampleLayersControl from "./example-layers-control";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: "normal"
    }
  }
  render() {

    return (
      <div className="app">
        <div className="side-bar">
          <div>
            <button

              onClick={() => {
                this.setState({ current: "normal" });
              }}
            >
              Normal
               </button>
          </div>

          <div className="margin-top-20">
            <button

              onClick={() => {
                this.setState({ current: "animate" });
              }}
            >
              Animate
               </button>
          </div>

          <div className="margin-top-20">
            <button

              onClick={() => {
                this.setState({ current: "bounds" });
              }}
            >
              Bounds
               </button>
          </div>
          <div className="margin-top-20">
            <button

              onClick={() => {
                this.setState({ current: "custom-component" });
              }}
            >
              Custom Component
               </button>
          </div>
          <div className="margin-top-20">
            <button

              onClick={() => {
                this.setState({ current: "draggable-marker" });
              }}
            >
              Draggable Marker
               </button>
          </div>

          <div className="margin-top-20">
            <button

              onClick={() => {
                this.setState({ current: "layers-control" });
              }}
            >
              Layers Control
               </button>
          </div>

        </div>
        <div className="content">
          <ExampleNormal current={this.state.current} />
          <ExampleAnimate current={this.state.current} />
          <ExampleBounds current={this.state.current} />
          <ExampleCustomComponent current={this.state.current} />
          <ExampleDraggableMarker current={this.state.current} />
          <ExampleLayersControl current={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
