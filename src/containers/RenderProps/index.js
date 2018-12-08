import React from 'react';
import Ver0 from './Ver0';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';
import Ver4 from './Ver4';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver 0</h2>
      <Ver0 />

      <h2>Ver 1 加入客製化文字</h2>
      <Ver1
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
      />

      <h2>Ver 2 讀取狀態後呈現不同的顏色</h2>
      <Ver2
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
      />

      <h2>Ver 3 改用render props: children 版</h2>
      <Ver3
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
        onToggle={() => alert('toggle')}
      >
        {(props) => (
          <input type="checkbox" onChange={props.toggle} checked={props.on} />
        )}
      </Ver3>

      <h2>Ver 4 改用render props: props 版</h2>
      <Ver4
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
        onToggle={() => alert('toggle')}
        renderToggle={(props) => (
          <input type="radio" onClick={props.toggle} checked={props.on} />
        )}
      />

    </React.Fragment>
  )
}
