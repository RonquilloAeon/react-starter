import React from 'react';
import { withScreen } from '../hocs';

import IpDetector from '../components/IpDetector';

class Home extends React.Component {
  render() {
    return (
      <div className="pure-g box">
        <div className="pure-u-1">
          <IpDetector/>
        </div>
        <div className="pure-u-1">
          <h1>Welcome to React Starter</h1>
          <p>Use this project to jump-start your react projects</p>
        </div>
      </div>
    );
  }
}

export default withScreen({ name: 'home', title: 'Home', titleDesc: 'React Starter' })(Home);
