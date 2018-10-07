import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  // Modify and add param e
  handleIncrement = e => {
    console.log(e);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // Pass reference to the method for handling the event
          // Pass an argument to event handler by passing inline arrow function calling the event handler in the body of the function
          onClick={() => this.handleIncrement({ id: 1 })}
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
