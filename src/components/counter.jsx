import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  // Modify and add param e
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    // Logs {onDelete: f, value: *, id: *}
    return (
      <div>
        {/* Render passed attributes instead of children by using  */}
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // Pass reference to the method for handling the event
          // Pass an argument to event handler by passing inline arrow function calling the event handler in the body of the function
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // pass id of this counter
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
