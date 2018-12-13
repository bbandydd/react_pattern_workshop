import React, { Component, createContext } from 'react';

const MyContext = createContext({
  on: false,
  toggle: () => {}
});

export default class Ver3 extends Component {
  static On = ({ children }) => (
    <MyContext.Consumer>
      {contextValue => contextValue.on && children}
    </MyContext.Consumer>
  )

  static Off = ({ children }) => (
    <MyContext.Consumer>
      {contextValue => !contextValue.on && children}
    </MyContext.Consumer>
  );

  static Button = () => (
    <MyContext.Consumer>
      {contextValue => <button onClick={contextValue.toggle}> Toggle </button>}
    </MyContext.Consumer>
  );

  static defaultProps = { onToggle: () => {} }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  state = {
    on: false,
    toggle: this.toggle,
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
