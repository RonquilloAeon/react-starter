import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import MainArea from './MainArea';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainArea}/>
      </Switch>
    );
  }
}

export default withRouter(App);
