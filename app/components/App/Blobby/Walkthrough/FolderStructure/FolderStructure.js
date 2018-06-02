import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class FolderStructure extends React.Component {
    render() {
        return (
            <div>
                <h2>Folder Structure</h2>
                <Text />
            </div>
        );
    }
}

export default FolderStructure;
