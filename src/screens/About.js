import React from 'react';
import { withScreen } from '../hocs';

class About extends React.Component {
  render() {
    return (
      <div className="pure-g box">
        <div className="pure-u-1">
          <h1>About React Starter</h1>
          <p>This project was inspired by the code underlying <a href="https://www.papayahealth.io">the Papaya Health app</a>. The code in this starter
          project takes advantage of lessons learned while developing Papaya Health.</p>
        </div>
      </div>
    );
  }
}

export default withScreen({ name: 'about', title: 'About', titleDesc: 'React Starter' })(About);
