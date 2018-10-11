import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // MOUNTING PHASE
  // *****************************
  // Called only once when an instance of a class is created
  // initialize properties in this instance
  // state can be set directly without using setState
  // no access to this.props unless props is passed as a parameter to constructor & to the constructor of the base classs
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }

  // *****************************
  // Called after our component is rendered into the dom
  // Perfect for making ajax calls to get data from server
  componentDidMount() {
    //  Ajax call
    // this.setState({movies})
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    // clone this array to get a new array of counters
    const counters = [...this.state.counters];
    // find the index of counter
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    // clone this array to get a new array of counters
    const counters = [...this.state.counters];
    // find the index of counter
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    // Get existing counters. Use map method to get each counter reset its value to zero then return it
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // create a new array without a given counter using filter method
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // call setState() of a component leting react update state
    // by overwriting counter's property with this counter's constnt
    this.setState({ counters });
  };

  // *****************************
  // called after constructor bt before component being mounted
  // When rendered all its children are rendered recursively
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            // pass list of counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
