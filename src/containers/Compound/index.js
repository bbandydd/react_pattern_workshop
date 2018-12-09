import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';
import Ver4 from './Ver4';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver1</h2>
      <Ver1
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
        onToggle={on => console.log('toggle', on)}
      />

      <h2>Ver2</h2>
      <Ver2
        onToggle={ on => console.log('toggle', on) }
      >
        <Ver2.On>The button is on</Ver2.On>
        <Ver2.Off>The button is off</Ver2.Off>
        <Ver2.Button />
      </Ver2>

      <h2>Ver3</h2>
      <Ver3>
        <Ver3.On>The button is on</Ver3.On>
        <Ver3.Off>The button is off</Ver3.Off>
        <Ver3.Button />
      </Ver3>

      <h2>Ver4</h2>
      <Ver4>
        <Ver4.On>The button is on</Ver4.On>
        <Ver4.Off>The button is off</Ver4.Off>
        <Ver4.Button />
      </Ver4>
    </React.Fragment>
  )
}
