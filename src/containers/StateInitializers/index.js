import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver1</h2>
      <Ver1
        onToggle={ on => console.log('toggle', on) }
      >
        <Ver1.On>The button is on</Ver1.On>
        <Ver1.Off>The button is off</Ver1.Off>
        <Ver1.Button />
      </Ver1>

      <h2>Ver2</h2>
      <Ver2
        onToggle={ on => console.log('toggle', on) }
        onReset={ state => console.log('state', state) }
      >
        <Ver2.On>The button is on</Ver2.On>
        <Ver2.Off>The button is off</Ver2.Off>
        <Ver2.Button />
      </Ver2>

      <h2>Ver3</h2>
      <Ver3
        initialOn
        onToggle={ on => console.log('toggle', on) }
        onReset={ state => console.log('state', state) }
      >
        <Ver3.On>The button is on</Ver3.On>
        <Ver3.Off>The button is off</Ver3.Off>
        <Ver3.Button />
      </Ver3>
    </React.Fragment>
  )
}
