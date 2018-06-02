import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class GettingStarted extends React.Component {
    render() {
        return (
            <div>
                <h2>Getting Started</h2>
                <Text />
            </div>
        );
    }
}

export default GettingStarted;
