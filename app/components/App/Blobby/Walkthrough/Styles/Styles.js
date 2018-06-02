import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class Styles extends React.Component {
    render() {
        return (
            <div>
                <h2>Styles</h2>
                <Text />
            </div>
        );
    }
}

export default Styles;
