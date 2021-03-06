import React, { Component } from "react";
import HogDetail from "./HogDetail";
// import hogs from "../porkers_data";

export class Hog extends Component {
  // const = {name}
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleDetailsClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };


  render() {
    return (
      <div className="ui card eight wide column pigTile">
        <h3>{this.props.name}</h3>

        <div>
          {this.state.clicked ? <HogDetail hog={this.props.hog} /> : null}
          <button className="ui button" onClick={this.handleDetailsClick}>
            {this.state.clicked ? "Less Info" : "More Info"}
          </button>
        </div>
      </div>
    );
  }
}

export default Hog;
