import React from 'react';
import { connect } from 'react-redux';

class BlobbyList extends React.Component {

    render() {
        return (
            <div>
                {
                    Object.values(this.props.list).map((elem, index) => {
                        return (
                            <div key={index}>
                                <span>{elem.name}</span>
                                <span>{elem.gender}</span>
                                <span>{elem.age}</span>
                                <span>{elem.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default BlobbyList;
