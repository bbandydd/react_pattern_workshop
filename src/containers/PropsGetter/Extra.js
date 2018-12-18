import React, { Component } from 'react';


/*
  取代以下程式碼用

  () => {
      this.toggle();
      onClick && onClick();
    },
 */
const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

export default class Extra extends Component {
  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on })
    )
  }

  getTogglerProps = ({ onClick, ...props } = {}) => ({
    'aria-pressed': this.state.on,
    onClick: callAll(onClick, this.toggle),
    ...props,
  })

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      getTogglerProps: this.getTogglerProps
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
