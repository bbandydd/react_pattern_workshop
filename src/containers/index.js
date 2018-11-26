import React, { Component, useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default class Main extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Hello, I`m ReactMaker.</h2>
        <p>To get started, edit containers/index.js</p>
        <Example />
      </div>
    );
  }
}
