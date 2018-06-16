import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class Connect extends React.Component {
    render() {
        return (
            <div>
                <h2>Connect</h2>
                <Text />
            </div>
        );
    }
}

export default Connect;
