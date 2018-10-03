import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  constructor() {
    super();
    // this is not undefined here... Counter obj is returned
    console.log("Constructor", this);
    // Get(
    //     bind returns a new instance of the handle increment function below where this there refers to counter object
    //    ) and reset handleIncrement
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // Define method for handling events
  handleIncrement() {
    // NOTE: we dont have access to this unless it is binded in constructor as shown above
    console.log("Increment Clicked", this);
    // OUTPUT: Increment Clicked Counter object
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // Pass reference to the method for handling the event
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
