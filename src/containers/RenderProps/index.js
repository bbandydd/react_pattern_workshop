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
      <Ver2
        whenOn="Toggle is on"
        whenOff="Toggle is Off"
      />

      <h2>Ver 3 : 改用render props: props 版</h2>
      <Ver3
        renderToggle={({ on, toggle }) => (
          <React.Fragment>
            <span>{on ? "Toggle is on" : "Toggle is off"}</span>
            <input type="radio" onClick={toggle} checked={on} />
          </React.Fragment>

        )}
      />

      <h2>Ver 4 : 改用render props: children 版</h2>
      <Ver4>
        {({ on, toggle }) => (
          <React.Fragment>
            <span>{on ? "Toggle is on" : "Toggle is off"}</span>
            <input type="radio" onClick={toggle} checked={on} />
          </React.Fragment>
        )}
      </Ver4>

      <h2>Extra : 使用Hooks</h2>
      <div>
        <span>{extra_on ? "Toggle is on" : "Toggle is off"}</span>
        <input type="radio" onClick={extra_toggle} checked={extra_on} />
      </div>
    </React.Fragment>
  )
}
