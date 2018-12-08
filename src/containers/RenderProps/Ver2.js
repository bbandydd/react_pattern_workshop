import React, { Component } from 'react';

export default class Ver2 extends Component {
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
    const { on } = this.state;

    return (
      <div>
        <span>{on ? whenOn : whenOff}</span>
        <button
          onClick={this.toggle}
          style={{
            backgroundColor: on ? 'green' : 'red',
            outline: 'none',
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}
