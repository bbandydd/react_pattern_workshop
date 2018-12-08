import React, { Component } from 'react';

// 將ver0加入新的文字
// form
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
    const { whenOn, whenOff } = this.props;

    return (
      <div>
        <span>{this.state.on ? whenOn : whenOff}</span>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
