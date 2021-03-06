import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver1: 透過按鈕切換on、off</h2>
      <hr/>
      <Ver1 />

      <h2>Ver2: 加入Reset初始化狀態</h2>
      <li>新增initialState並給state初始化、this.reset使用</li>
      <hr/>
      <Ver2 />

      <h2>Ver3: 使用者自己定義初始狀態</h2>
      <li>提供props - initialOn給使用者自定義初始化狀態值</li>
      <hr/>
      <Ver3 initialOn />
    </React.Fragment>
  )
}
