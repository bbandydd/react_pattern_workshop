import React, { Component } from 'react';

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

export default class HandOn extends Component {
  static defaultProps = {
    onToggle: () => {},
  };

  state = {
    on: false,
    currentToggleTimes: 0
  }

  toggle = () => {
    // 每次 toggle 時判斷有沒有超過使用者定義的 toggle 次數上限
    if (this.state.currentToggleTimes >= this.props.toggleTimes) {
      alert('toggle too much')
      return;
    }
    this.setState(
      ({ on, currentToggleTimes }) => ({
        on: !on,
        currentToggleTimes: currentToggleTimes + 1
      }),
      () => this.props.onToggle(this.state.on),
    );
  }

  getTogglerProps = ({ onClick, ...props } = {}) => ({
    'aria-pressed': this.state.on,
    onClick: callAll(onClick, this.toggle),
    ...props,
  })

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggleTimes: this.state.currentToggleTimes,
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
