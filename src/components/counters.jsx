import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {/* Render each counter using map method */}
        {this.state.counters.map(counter => (
          // NB: Can pass content using attributes eg. id={counter.id}
          <Counter key={counter.id} value={counter.value}>
            {/* Pass the content as children dynamically used in passing complex elements */}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
