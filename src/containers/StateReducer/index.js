import React from 'react';
import Ver0 from './Ver0';
import Ver1 from './Ver1';

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
        <h2>Ver 0</h2>
        <Ver0
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
        </Ver0>

        <h2>Ver 1</h2>
        <Ver1
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
        </Ver1>

      </React.Fragment>
    )
  }
}
