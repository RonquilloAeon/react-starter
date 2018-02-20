import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';

import { About, Home } from '../../screens';
import styles from './MainArea.styl'

const MainArea = () => (
  <div className="main">
    <header className={`pure-g box ${styles.header}`}>
      <div className="pure-u-1 pure-u-sm-1-2">
        <img className={styles.logo} src={require('../../assets/images/react-starter-logo@3x.png')}/>
      </div>
      <nav className="pure-u-1 pure-u-sm-1-2">
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
