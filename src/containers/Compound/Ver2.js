import React, { Component } from 'react';

export default class Ver1 extends Component {
  static On = ({ on, children }) => on && children;
  static Off = ({ on, children }) => !on && children;
  static Button = ({ on, toggle }) => <button onClick={toggle}>Toggle</button>
  static defaultProps = { onToggle: () => {} }

  state = { on: false }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    const children = React.Children.map(
      this.props.children,
      child =>
        React.cloneElement(child, {
          on: this.state.on,
          toggle: this.toggle
        }),
    );

    return <div>{children}</div>
  }
}
