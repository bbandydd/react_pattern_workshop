import React, { Suspense, lazy, Component, useState } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import * as Style from './style';

import StateInitializers from '../StateInitializers';
import Compound from '../Compound';
import Context from '../Context';
import RenderProps from '../RenderProps';
import RenderPropsFinal from '../RenderProps/hands-on/final';
import RenderPropsWork from '../RenderProps/hands-on/work';

const WaitingComponent = Component => {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Style.Menu>
            <Route exact path="/">
              <NavLink exact to="/">State Initializers</NavLink>
            </Route>
            <Route path="/compound">
              <NavLink to="/compound">Compound</NavLink>
            </Route>
            <Route path="/context">
              <NavLink to="/context">Context</NavLink>
            <Route path="/rednerprops">
              <NavLink to="/rednerprops">Redner Props</NavLink>
            </Route>
          </Style.Menu>
          <Style.Content>
            <Route exact path="/" component={WaitingComponent(StateInitializers)} />
            <Route path="/compound" component={WaitingComponent(Compound)} />
            <Route path="/context" component={WaitingComponent(Context)} />
            <Route path="/rednerprops" component={WaitingComponent(RenderProps)} />
            <Route path="/rednerprops/final" component={WaitingComponent(RenderPropsFinal)} />
            <Route path="/rednerprops/work" component={WaitingComponent(RenderPropsWork)} />
          </Style.Content>
        </div>
      </Router>
    );
  }
}
