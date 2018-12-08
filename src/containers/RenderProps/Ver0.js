import React, { Component } from 'react';

export default class Ver0 extends Component {
  static defaultProps = { onToggle: () => {} }

  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on),
    )
  }

  render() {
    const { whenOn, whenOff } = this.props;

    return (
      <div>
        <span>{this.state.on ? 'on' : 'off'}</span>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}