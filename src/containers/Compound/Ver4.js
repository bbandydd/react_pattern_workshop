import React, { Component, createContext, useContext } from 'react';

const MyContext = createContext({
  on: false,
  toggle: () => {}
});

export default class Ver3 extends Component {

  static On = ({ children }) => {
    const context = useContext(MyContext);
    return context.on && children
  }

  static Off = ({ children }) => {
    const context = useContext(MyContext);
    return !context.on && children
  }

  static Button = () => {
    const context = useContext(MyContext);
    return <button onClick={context.toggle}> Toggle </button>
  }

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
