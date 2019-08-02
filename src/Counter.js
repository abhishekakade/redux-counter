import React, { Component } from "react";

import { connect } from "react-redux";

class Counter extends Component {
  // commented out state cuz it will now be in redux
  // state = {
  //   count: 0
  // };

  increment = () => {
    // commented out cuz redux. this will change later
    // this.setState(state => ({
    //   count: state.count + 1
    // }));

    // REDUX PART
    // connect function passes in dispatch function as a prop (mapStateToProps) with which you can dispatch actions
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    // commented out cuz redux. this will change later
    // this.setState(state => ({
    //   count: state.count - 1
    // }));

    // REDUX PART
    // connect function passes in dispatch function as a prop (mapStateToProps) with which you can dispatch actions
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.increment}>+</button>
          {/* commented out cuz count will now come from redux as a prop */}
          {/* <span className="count">{this.state.count}</span> */}
          <span className="count">{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
