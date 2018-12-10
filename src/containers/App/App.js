import React, { Suspense, lazy, Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import * as Style from './style';

const StateInitializers = lazy(() => import('../StateInitializers'));
const Compound = lazy(() => import('../Compound'));
const Context = lazy(() => import('../Context'));

const RenderProps = lazy(() => import('../RenderProps'));
const RenderPropsFinal = lazy(() => import('../RenderProps/hands-on/final'));
const RenderPropsWork = lazy(() => import('../RenderProps/hands-on/work'));
const PropsGetter = lazy(() => import('../PropsGetter'));
const StateReducer = lazy(() => import('../StateReducer'));

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
            <Route path="/rednerprops">
              <NavLink to="/rednerprops">Redner Props</NavLink>
            </Route>
            <Route path="/propsgetter">
              <NavLink to="/propsgetter">Props getter</NavLink>
            </Route>
            <Route path="/statereducer">
              <NavLink to="/statereducer">State Reducer</NavLink>
            </Route>
          </Style.Menu>
          <Style.Content>
            <Route exact path="/" component={WaitingComponent(StateInitializers)} />
            <Route path="/compound" component={WaitingComponent(Compound)} />
            <Route path="/context" component={WaitingComponent(Context)} />
            <Route path="/rednerprops" component={WaitingComponent(RenderProps)} />
            <Route path="/rednerprops/final" component={WaitingComponent(RenderPropsFinal)} />
            <Route path="/rednerprops/work" component={WaitingComponent(RenderPropsWork)} />
            <Route path="/propsgetter" component={WaitingComponent(PropsGetter)} />
            <Route path="/statereducer" component={WaitingComponent(StateReducer)} />
          </Style.Content>
        </div>
      </Router>
    );
  }
}
