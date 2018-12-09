import React, { Component } from 'react';

export default class Ver1 extends Component {
  state = { on: false }


  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on),
    )
  }

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      togglerProps: { // collection for common Props
        "aria-pressed": this.state.on,
        onClick: this.toggle
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children(this.getStateAndHelpers())}
      </React.Fragment>
    );
  }
}
