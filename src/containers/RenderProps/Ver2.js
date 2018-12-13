import React, { Component } from 'react';

export default class Ver2 extends Component {

  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
    )
  }

  render() {
    const { whenOn, whenOff } = this.props;
    const { on } = this.state;

    return (
      <div>
        <span>{on ? whenOn : whenOff}</span>
        <button onClick={this.toggle}>Toggle {on}</button>
      </div>
    );
  }
}
