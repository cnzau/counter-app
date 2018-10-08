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

  handleDelete = () => {
    console.log("Event Handler Called");
  };

  render() {
    return (
      <div>
        {/* Render each counter using map method */}
        {this.state.counters.map(counter => (
          // pass a reference to handleDeletemethod to a child component
          // pass content to children using attributes
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
