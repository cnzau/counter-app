import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    return (
      <div>
        {/* Get badge classes from a metthod in this class */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  //Extracted and Refactored from variables in return method to create new method
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // Object Destructuring (this.state.count --> { count })
    const { count } = this.state;
    // Embedding js/jsx expressions
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
