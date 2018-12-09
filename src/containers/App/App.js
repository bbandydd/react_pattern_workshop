import React, { Suspense, lazy, Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import * as Style from './style';

const StateInitializers = lazy(() => import('../StateInitializers'));
const Compound = lazy(() => import('../Compound'));
const Context = lazy(() => import('../Context'));

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
            </Route>
          </Style.Menu>
          <Style.Content>
            <Route exact path="/" component={WaitingComponent(StateInitializers)} />
            <Route path="/compound" component={WaitingComponent(Compound)} />
            <Route path="/context" component={WaitingComponent(Context)} />
          </Style.Content>
        </div>
      </Router>
    );
  }
}
