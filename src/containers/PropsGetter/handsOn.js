import React, { Component } from 'react';

export default class HandsOn extends Component {
  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on })
    )
  }

  render() {
    const { on } = this.state;

    return (
      <React.Fragment>
        {this.props.children({
          on,
          toggle: this.toggle
         })}
      </React.Fragment>
    );
  }
}
