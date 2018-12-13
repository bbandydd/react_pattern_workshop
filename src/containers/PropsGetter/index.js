import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';
import Extra from './Extra';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver 1</h2>
      <Ver1
        onToggle={on => console.log("toggle", on)}
      >
        {({ on, toggle }) => (
          <div>
            {on ? "The button is on" : "The button is off"}
            <hr />
            <button className="button1" onClick={toggle} aria-pressed={on}>
              {on ? "click on" : "click off"}
            </button>
            <hr />
            <button className="button2" onClick={toggle} aria-pressed={on} aria-label="custom-button2">
              {on ? "click on" : "click off"}
            </button>
          </div>
        )}
      </Ver1>

      <h2>Ver 2: props collection</h2>
      <Ver2
        onToggle={on => console.log("toggle", on)}
      >
        {({ on, togglerProps }) => (
          <div>
            {on ? "The button is on" : "The button is off"}
            <hr />
            <button className="button1" {...togglerProps}>
              {on ? "click on" : "click off"}
            </button>
            <hr />
            <button className="button2" {...togglerProps} aria-label="custom-button2">
              {on ? "click on" : "click off"}
            </button>
          </div>
        )}
      </Ver2>

      <li>缺點：props 容易被overwrite</li>

      <h2>Ver 3</h2>
      <Ver3
        onToggle={on => console.log("toggle", on)}
      >
        {({ on, getTogglerProps }) => (
          <div>
            {on ? "The button is on" : "The button is off"}
            <hr />
            <button
              className="button1"
              {...getTogglerProps()}
              onClick={() => alert('btn1')}
            >
              {on ? "click on" : "click off"}
            </button>
            <hr />
            <button
              className="button2"
              {...getTogglerProps({
                onClick: () => alert('btn2')
              })}
              aria-label="custom-button2"
            >
              {on ? "click on" : "click off"}
            </button>
          </div>
        )}
      </Ver3>
      <li>直接寫在props的時候，需要注意呼叫的順序</li>
      <li>寫成funciton 主要是要強調 overwrite common props</li>
      <li>使用者所提供的 onClick 就不會蓋過我們元件原始的 onClick 行為</li>

      <h2>Extra</h2>
      <Extra
        onToggle={on => console.log("toggle", on)}
      >
        {({ on, getTogglerProps }) => (
          <div>
            {on ? "The button is on" : "The button is off"}
            <hr />
            <button
              className="button1"
              {...getTogglerProps()}
              onClick={() => alert('btn1')}
            >
              {on ? "click on" : "click off"}
            </button>
            <hr />
            <button
              className="button2"
              {...getTogglerProps({
                onClick: () => alert('btn2')
              })}
              aria-label="custom-button2"
            >
              {on ? "click on" : "click off"}
            </button>
          </div>
        )}
      </Extra>
    </React.Fragment>
  )
}
