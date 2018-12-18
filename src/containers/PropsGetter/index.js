import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';
import Ver3 from './Ver3';
import Extra from './Extra';

export default () => {
  return (
    <React.Fragment>
      <h2>Ver 1</h2>
      <Ver1>
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
      <Ver2>
        {({ on, togglerProps }) => (
          <div>
            {on ? "The button is on" : "The button is off"}
            <hr />
            <button className="button1" {...togglerProps} onClick={() => alert('btn1')}>
              {on ? "click on" : "click off"}
            </button>
            <hr />
            <button className="button2" {...togglerProps} aria-label="custom-button2">
              {on ? "click on" : "click off"}
            </button>
          </div>
        )}
      </Ver2>

      <h2>Ver 3: props getter</h2>
      <Ver3>
        {({ on, getTogglerProps }) => (
          <div>
            {on ? "The button is on" : "The button is off"}
            <hr />
            <button
              className="button1"
              {...getTogglerProps({
                onClick: () => alert('btn1')
              })}
            >
              {on ? "click on" : "click off"}
            </button>
            <hr />
            <button
              className="button2"
              {...getTogglerProps()}
              aria-label="custom-button2"
            >
              {on ? "click on" : "click off"}
            </button>
          </div>
        )}
      </Ver3>

      <h2>Extra</h2>
      <Extra>
        {({ on, getTogglerProps }) => (
          <div>
            {on ? "The button is on" : "The button is off"}
            <hr />
            <button
              className="button1"
              {...getTogglerProps()}
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
