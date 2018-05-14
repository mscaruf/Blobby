import React from 'react';
import { connect } from 'react-redux';

class Demo extends React.Component {
  render() {
    return(
      <div>
        <h2>Demo app for boilerplate</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Demo)
