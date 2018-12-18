import React, { Component } from 'react';

export default class Ver1 extends Component {
  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on })
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle {this.state.on ? 'on' : 'off'} </button>
      </div>
    );
  }
}
