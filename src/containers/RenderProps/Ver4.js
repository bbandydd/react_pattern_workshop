import React, { Component } from 'react';

export default class Ver4 extends Component {
  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on })
    )
  }

  render() {
    const { on } = this.state;

    const renderedChildren = this.props.children && this.props.children({
      on,
      toggle: this.toggle
     });
    return renderedChildren && React.Children.only(renderedChildren);
  }
}
