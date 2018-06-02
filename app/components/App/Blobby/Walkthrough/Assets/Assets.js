import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class Assets extends React.Component {
    render() {
        return (
            <div>
                <h2>Assets</h2>
                <Text />
            </div>
        );
    }
}

export default Assets;
