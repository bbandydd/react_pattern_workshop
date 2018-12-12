import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';

export default class StateReducerIndex extends React.Component {
  initialState = { timesClicked: 0 }

  state = this.initialState

  toggleStateReducer = (state, changes) => {
    if (changes.type === 'forced') {
      return changes
    }
    if (this.state.timesClicked >= 4) {
      return {...changes, on: false}
    }
    return changes
  }

  render() {
    return (
      <React.Fragment>
        <h2>Ver 1</h2>
        <Ver1
          toggleTimes={3}
        >
          {({ on, getTogglerProps }) => (
            <button
              className="button1"
              {...getTogglerProps()}
            >
              {on ? "click on" : "click off"}
            </button>
          )}
        </Ver1>

        <h2>Ver 2</h2>
        <Ver2
          onToggle={on => {
            this.setState(({ timesClicked }) => ({
               timesClicked: timesClicked + 1,
             }))
          }}
          stateReducer={this.toggleStateReducer}
        >
          {({ on, getTogglerProps }) => (
            <React.Fragment>
              <button
                className="button1"
                {...getTogglerProps()}
              >
                {on ? "click on" : "click off"}
              </button>

              {this.state.timesClicked > 4 && 'Click too many times!'}
            </React.Fragment>
          )}
        </Ver2>

      </React.Fragment>
    )
  }
}
