import React from 'react'

export default class Pointer1 extends React.Component {
  render() {
    const { x, y } = this.props;

    return (
      <div style={{
        width: '5px',
        height: '5px',
        position: 'relative',
        top: x,
        left: y
      }} />
    )
  }
}
