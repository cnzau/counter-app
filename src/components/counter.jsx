import React, { Component } from "react";

class Counter extends Component {
  // Implementing a single source of truth
  // Delete state here to make this a controlled component
  // It has no local state, will only receive data via props and raise events when data needs to be changed
  // change all references of this.state and relly entirely on props object to display data and notify changes

  render() {
    console.log(this.props);
    // Logs {onDelete: f, value: *, id: *}
    return (
      <div>
        {/* Render passed attributes instead of children by using props in elements  */}
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // pass name of our event onIncrement
          // Pass reference to the counter object making implementation of event handler simple
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
