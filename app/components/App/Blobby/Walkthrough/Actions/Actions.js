import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class Actions extends React.Component {
    render() {
        return (
            <div>
                <h2>Actions</h2>
                <Text />
            </div>
        );
    }
}

export default Actions;
