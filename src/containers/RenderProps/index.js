import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';
import Ver4 from './Ver4';
import useToggle from './Extra';

export default () => {

  const { on: extra_on, toggle: extra_toggle } = useToggle();

  return (
    <React.Fragment>
      <h2>Ver 1: 透過按鈕切換on、off</h2>
      <Ver1 />

      <h2>Ver 2: 加入文字描述</h2>
      <li>根據狀態顯示不同文字</li>
      <hr />
      <Ver2
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
      />

      <h2>Ver 3 : 改用render props: props 版</h2>
      <li>利用 this.props.renderToggle(sharedState)將要分享的state傳遞出去</li>
      <hr />
      <Ver3
        renderToggle={({ on, toggle }) => (
          <React.Fragment>
            <span>{on ? "Toggle is on" : "Toggle is off"}</span>
            <input type="radio" onClick={toggle} checked={on} />
          </React.Fragment>

        )}
      />

      <h2>Ver 4 : 改用render props: children 版</h2>
      <li>利用 this.props.childen(sharedState)將要分享的state傳遞出去</li>
      <hr />
      <Ver4>
        {({ on, toggle }) => (
          <React.Fragment>
            <span>{on ? "Toggle is on" : "Toggle is off"}</span>
            <input type="radio" onClick={toggle} checked={on} />
          </React.Fragment>
        )}
      </Ver4>

      <h2>Extra : 使用Hooks</h2>
      <li>將 class 改成 functional component</li>
      <li>利用useState 取代 class 的 state</li>
      <hr />
      <div>
        <span>{extra_on ? "Toggle is on" : "Toggle is off"}</span>
        <input type="radio" onClick={extra_toggle} checked={extra_on} />
      </div>
    </React.Fragment>
  )
}
