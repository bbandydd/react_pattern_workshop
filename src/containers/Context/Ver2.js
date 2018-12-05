import React, { Component, createContext, useContext } from 'react';

const MyContext = createContext();

const Layer2 = () => (
  <div style={{ border: '1px solid', padding: '10px' }}>
    Layer2
    <Layer3 />
  </div>
);

const Layer3 = () => {
  // React 16.7
  const context = useContext(MyContext);

  return (
    <div style={{ border: '1px solid', padding: '10px' }}>
      Layer3 - { context.count }
      <button onClick={context.increment}>+++</button>
      <Layer4 />
    </div>
  );
};

class Layer4 extends Component {
  // React 16.6
  static contextType = MyContext;

  render() {
    return (
      <div style={{ border: '1px solid', padding: '10px' }}>
        Layer4 - { this.context.count }
        <button onClick={this.context.increment}>+++</button>
      </div>
    );
  }
}

export default class Ver1 extends Component {
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  state = {
    count: 0,
    increment: this.increment,
  }

  render() {
    const { count } = this.state;

    return (
      <MyContext.Provider value={this.state}>
        <div style={{ border: '1px solid', padding: '10px', width: 200 }}>
          Layer1 - {count}
          <Layer2 />
        </div>
      </MyContext.Provider>
    );
  }
}
