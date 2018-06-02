import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class Overview extends React.Component {
    render() {
        return (
            <div>
                <h2>Overview</h2>
                <Text />
            </div>
        );
    }
}

export default Overview;
