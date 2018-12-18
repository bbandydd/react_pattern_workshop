import React from 'react';
import Ver1 from './Ver1';
import Ver2 from './Ver2';

export default class StateReducerIndex extends React.Component {
  state = {
    timesClicked: 0
  }

  toggleStateReducer = (state, changes) => {
    if (this.state.timesClicked >= 4) {
      return {
        ...changes,
        on: false
      };
    }
    return changes;
  }

  handleToggle = on => {
    this.setState({
      timesClicked: this.state.timesClicked + 1,
    })
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
              {...getTogglerProps()}
            >
              {on ? "click on" : "click off"}
            </button>
          )}
        </Ver1>

        <h2>Ver 2</h2>
        <Ver2
          onToggle={this.handleToggle}
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
