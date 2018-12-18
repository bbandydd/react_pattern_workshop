import React, { Component } from 'react';

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

export default class Ver2 extends Component {
  static defaultProps = {
    onToggle: () => {},
    stateReducer: (state, changes) => changes,
  };

  state = {
    on: false,
    internalState: 'internalState',
  };

  internalSetState(changes, callback) {
    this.setState(state => {
      // 模擬setState 第一個參數, 可以是 function 或 object, 若原本傳入 function, 要把 state 回傳。
      const changesObject =
        typeof changes === 'function' ? changes(state) : changes

      // 使用定義好的 StateReducer, 並接收要更新的state
      const reducedChanges =
        this.props.stateReducer(state, changesObject) || {}

      // 去除不能被外部控制的state
      const {
        internalState: ignoredInternalState,
        ...onlyChanges
      } = reducedChanges

      // 假如沒有變動就回傳 null
      return Object.keys(onlyChanges).length ? onlyChanges : null
    }, callback)
  }

  toggle = () =>
    this.internalSetState(
      (state) => ({ on: !state.on }),
      () => this.props.onToggle(this.state.on), // 呼叫外面傳來的callback function
    )

  getTogglerProps = ({ onClick, ...props } = {}) => ({
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
