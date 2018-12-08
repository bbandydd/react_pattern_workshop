import React from 'react';
import Mouse from './Mouse';

export default () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Mouse>
        {({x, y}) => {
          return <span>position ({x}, {y})</span>
        }}
      </Mouse>
    </div>
  )
}