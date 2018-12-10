import React, { Component } from 'react';

export default class Ver1 extends Component {
  static defaultProps = { onToggle: () => {} }
  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on),
    )
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
