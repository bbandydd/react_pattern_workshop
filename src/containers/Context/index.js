import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Extra from './Extra';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver1: prop drilling</h2>
      <li>實作一個四層架構Component，Layer4修改Layer1的state</li>
      <hr/>
      <Ver1/>

      <h2>Ver2: 使用React Context API修改</h2>
      <li>Layer1使用Context.Provider，value使用this.state</li>
      <li>Layer3使用Context.Comsumer</li>
      <li>Layer4使用React 16.6 contextType</li>
      <hr/>
      <Ver2 />

      <h2>Extra: 使用React 16.7 useContext修改</h2>
      <li>Layer4使用React 16.7 useContext</li>
      <hr/>
      <Extra />
    </React.Fragment>
  )
}
