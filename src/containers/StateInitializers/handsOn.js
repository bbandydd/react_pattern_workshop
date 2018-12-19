import React, { Component } from 'react';

export default class HandsOn extends Component {
  state = { on: false }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    return (
      <div>
        <span>{this.state.on ? 'The button is on' : 'The button is off'}</span>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
