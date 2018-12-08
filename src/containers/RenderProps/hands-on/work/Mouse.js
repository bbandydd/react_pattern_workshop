import React from 'react'
import Pointer1 from './Pointer1'

export default class Mouse extends React.Component {
  state =  { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    const { x, y } = this.state

    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>The mouse position is ({x}, {y})</h1>
        <Pointer1 x={x} y={y} />
      </div>
    )
  }
}
