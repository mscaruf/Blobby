import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
    render() {
        return (
            <div>
                This is the about route...
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(About)
