import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver 1</h2>
      <Ver1 />

      <h2>Ver 2 : 改用render props: children 版</h2>
      <Ver2
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
        onToggle={() => alert('toggle')}
      >
        {(props) => (
          <input type="checkbox" onChange={props.toggle} checked={props.on} />
        )}
      </Ver2>

      <h2>Ver 3 : 改用render props: props 版</h2>
      <Ver3
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
