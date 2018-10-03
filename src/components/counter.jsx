import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <React.Fragment>
        {/* Setting attributes using state
            Inline styling */}
        <img style={{ borderRadius: 5 }} src={this.state.imageUrl} alt="" />
        {/* Style using state Object
            Embedding js/jsx expressions
            Object destructuring for this.state.classes */}
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    // Object Destructuring (this.state.count --> { count })
    const { count } = this.state;
    // Embedding js/jsx expressions
    return count === 0 ? <h6>Zero</h6> : count;
  }
}

export default Counter;
