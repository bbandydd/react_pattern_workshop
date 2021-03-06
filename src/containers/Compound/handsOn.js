import React, { Component } from 'react';

export default class HandsOn extends Component {
  static defaultProps = { onToggle: () => {} }

  state = { on: false }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    const { whenOn, whenOff } = this.props;

    return (
      <div>
        <span>{this.state.on ? whenOn : whenOff}</span>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
