import React, { Component } from 'react';

export default class Ver2 extends Component {
  initialState = { on: false }
  state = this.initialState

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  reset = () => {
    this.setState(this.initialState);
  }

  render() {
    return (
      <div>
        <span>{this.state.on ? 'The button is on' : 'The button is off'}</span>
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
