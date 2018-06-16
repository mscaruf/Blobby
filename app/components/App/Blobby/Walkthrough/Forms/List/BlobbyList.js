import React from 'react';
import { connect } from 'react-redux';

class BlobbyList extends React.Component {

    render() {
        return (
            <div>
                <h3>Current list</h3>
                {
                    Object.values(this.props.list).map((elem, index) => {
                        return (
                            <div className="row">
                                <div key={index}>
                                    <div className={"four columns blobby-elem-" + elem.gender}></div>
                                    <div className={"six columns"}>
                                        <div className="row">{elem.name}</div>
                                        <div className="row">{elem.age}</div>
                                        <div className="row"><i>{elem.description}</i></div>
                                    </div>
                                    <div className={"two columns"}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default BlobbyList;
