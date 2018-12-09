import React, { Component } from 'react';

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

export default class Ver0 extends Component {
  static defaultProps = {
    onToggle: () => {},
    onReset: () => {},
    initialOn: false,
    stateReducer: (state, changes) => changes,
  };


  // 元件內部多一個 toggleTimes 來控制目前的 toggle 次數
  initialState = { on: this.props.initialOn, currentToggleTimes: 0 };

  state = this.initialState;

  internalSetState(changes, callback) {
    this.setState(state => {
      // handle function setState call
      const changesObject =
        typeof changes === 'function' ? changes(state) : changes

      // apply state reducer
      const reducedChanges =
        this.props.stateReducer(state, changesObject) || {}

      // remove the type so it's not set into state
      const {type: ignoredType, ...onlyChanges} = reducedChanges

      // return null if there are no changes to be made
      return Object.keys(onlyChanges).length ? onlyChanges : null
    }, callback)
  }

  toggle = () =>
    this.internalSetState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on),
    )

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
