import React, { Component } from 'react';

export default class Ver2 extends Component {
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
      <React.Fragment>
        <span>{on ? whenOn : whenOff}</span>
        {this.props.children({
          on,
          toggle: this.toggle
         })}
      </React.Fragment>
    );
  }
}
