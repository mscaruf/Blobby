import React from 'react';
import { connect } from 'react-redux';

const About = () =>
    <div>
        This is the about route...
    </div>;


function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(About)
