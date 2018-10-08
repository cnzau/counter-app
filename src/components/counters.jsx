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

  handleDelete = counterId => {
    // create a new array without a given counter using filter method
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // call setState() of a component leting react update state
    // by overwriting counter's property with this counter's constnt
    this.setState({ counters });
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
            counter={counter}
            // use object instead of the below properties
            // value={counter.value}
            // id={counter.id}
            // selected={counter.selected}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
