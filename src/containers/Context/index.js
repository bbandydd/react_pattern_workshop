import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver1: prop drilling</h2>
      <Ver1/>

      <h2>Ver2: 使用React Context API修改</h2>
      <Ver2 />
    </React.Fragment>
  )
}
