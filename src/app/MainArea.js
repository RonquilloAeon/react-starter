import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';

import { About, Home } from '../screens';

const MainArea = () => (
  <div className="main">
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </main>
  </div>
);

export default MainArea;
