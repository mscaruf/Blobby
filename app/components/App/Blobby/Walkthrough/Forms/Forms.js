import React from 'react';
import { connect } from 'react-redux';

import BlobbyForm from './Form/BlobbyForm';
import BlobbyList from './List/BlobbyList';

import * as BlobbyActions from '../../../../../actions/functions/blobby';

import TextBefore from './TextBefore';
import TextAfter from './TextAfter';

class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.blobby.blobbyList
        }
    }

    addBlobbyToList = (blobby) => {
        this.props.dispatch(BlobbyActions.addBlobbyToList(blobby))
    }

    render() {
        return (
            <div>
                <TextBefore />

                <BlobbyForm callback={this.addBlobbyToList} />
                <BlobbyList list={this.state.list} />

                <TextAfter />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        blobby: state.blobbyReducer
    };
}

export default connect(mapStateToProps)(Forms)
