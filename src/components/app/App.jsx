import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MuppetAll from '../../containers/MuppetAll';
import MuppetDetailPage from '../../containers/MuppetDetailPage';

export default function App() {
  return <Router>
    <Switch>
      <Route
        path="/"
        exact
        component={MuppetAll}
      />
      <Route
        path="/:id"
        exact
        component={MuppetDetailPage}
      />
    </Switch>
  </Router>;
}
