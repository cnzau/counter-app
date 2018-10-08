import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  // Modify and add param e
  handleIncrement = e => {
    console.log(e);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    // Logs {value: *, children: {...}}
    return (
      <div>
        {/* Render passed children */}
        {this.props.children}
        {/* NB: Can render passed attributes instead of children by using {this.props.id} */}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
