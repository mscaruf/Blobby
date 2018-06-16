import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class Redux extends React.Component {
    render() {
        return (
            <div>
                <h2>Redux</h2>
                <Text />
            </div>
        );
    }
}

export default Redux;
