import React, { Component } from 'react';

const Layer2 = ({ count, increment }) => (
  <div style={{ border: '1px solid', padding: '10px' }}>
    Layer2
    <Layer3 count={count} increment={increment}/>
  </div>
);

const Layer3 = ({ count, increment }) => (
  <div style={{ border: '1px solid', padding: '10px' }}>
    Layer3
    <Layer4 count={count} increment={increment}/>
  </div>
);

const Layer4 = ({ count, increment }) => (
  <div style={{ border: '1px solid', padding: '10px' }}>
    Layer4 - { count }
    <button onClick={increment}>+++</button>
  </div>
);

export default class Ver1 extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div style={{ border: '1px solid', padding: '10px', width: 200 }}>
        Layer1 - {count}
        <Layer2 count={count} increment={this.increment} />
      </div>
    );
  }
}
