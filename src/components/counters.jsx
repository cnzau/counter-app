import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // Controlled componet bt the app component
  // No state, receives data and methods to modify the data by props
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* Render each counter using map method */}
        {this.props.counters.map(counter => (
          // Event is not handled here
          // Raise an event with onDel... which is then bubbled up to the parent with this.props.onDel...]
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
