import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const withScreen = ({ name = 'screen', title = 'Screen', titleDesc = 'React Starter' } = {}) => {
  return (WrappedComponent) => {
    return class extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          hasError: false,
        };
      }

      componentDidCatch(error, info) {
        this.setState({
          hasError: true,
        });
      }

      render() {
        const { hasError } = this.state;

        if (hasError) {
          return (
            <div className="screen has-error">
              <div className="pure-g box">
                <div className="pure-u-1">
                  <h2 className="align-center">Oops! Something went wrong.</h2>
                  <p className="align-center"><Link to="/">Click here</Link> to continue.</p>
                </div>
              </div>
            </div>
          );
        }
        else {
          return (
            <div className={['screen', `screen__${ name }`].join(' ')}>
              <Helmet>
                <title>{ `${ title } | ${ titleDesc }` }</title>
              </Helmet>
              <WrappedComponent { ...this.props }/>
            </div>
          );
        }
      }
    };
  };
};
