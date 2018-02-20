import { actions as ipActions } from '../../ducks/ip';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import styles from './IpDetector.styl';

class IpDetector extends React.Component {
  componentDidMount() {
    this.props.fetchIp();
  }

  render() {
    const { ip } = this.props;

    return (
      <div className={`pure-g box ${styles.wrapper}`}>
        <div className="pure-u-1">
          <p className="color-white"><strong>Your IP:</strong> {ip.ipAddress}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ip: state.ip });
const mapDispatchToProps = (dispatch) => bindActionCreators({ ...ipActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IpDetector);