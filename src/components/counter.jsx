import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  // Define method for handling events
  handleIncrement() {
    // NOTE: we dont have access to this
    console.log("Increment Clicked", this);
    // OUTPUT: Increment Clicked undefined
    // obj.method(); this called here will return a reference to the object
    // function(); this here returns a reference to window object or undefined in strict mode
    // Solution is to use a bind method
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
