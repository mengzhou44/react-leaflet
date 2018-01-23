import React, { Component } from "react";


import AnimateExample from "./animate-example";
import NormalExample from "./normal-example";

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
        </div>
        <div className="content">
          <NormalExample current={this.state.current} />
          <AnimateExample current={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
