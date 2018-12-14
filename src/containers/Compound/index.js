import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';
import Extra from './Extra';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver1: 透過按鈕切換on、off，並顯示不同的文字描述</h2>
      <hr/>
      <Ver1
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
      />

      <h2>Ver2: 實作static On、Off、Button</h2>
      <li>將UI元件透過this.props.children傳入parent component，利用React.children.map來render</li>
      <li>並透過React.cloneElement傳props給child</li>
      <hr/>
      <Ver2>
        <Ver2.On>The button is on</Ver2.On>
        <Ver2.Off>The button is off</Ver2.Off>
        <Ver2.Button />
      </Ver2>

      <h2>Ver3: 使用React Context API修改</h2>
      <li>使用Context API的Provider、Consumer達到共享state</li>
      <hr/>
      <Ver3>
        <Ver3.On>The button is on</Ver3.On>
        <Ver3.Off>The button is off</Ver3.Off>
        <Ver3.Button />
      </Ver3>

      <h2>Extra: 使用React 16.7 useContext修改</h2>
      <li>stateless component使用useContext</li>
      <hr/>
      <Extra>
        <Extra.On>The button is on</Extra.On>
        <Extra.Off>The button is off</Extra.Off>
        <Extra.Button />
      </Extra>
    </React.Fragment>
  )
}
