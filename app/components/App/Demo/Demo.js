import React from 'react';
import { connect } from 'react-redux';
import * as DemoActions from '../../../actions/functions/demo';

class Demo extends React.Component {

    componentDidMount() {
        this.props.dispatch(DemoActions.setAppName("DemoApp"));
    }

    // getApiData(){
    //     return (
    //         <div>{(this.props.apidata[0] !== undefined)
    //           ? this.props.apidata[0].apidata.title : "loading..." }</div>
    //       );
    // }

    render() {
        return (
            <div>
                <h2>AppName:</h2>
                <h3>{this.props.appName}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        appName: state.demoReducer.appName
    };
}

export default connect(mapStateToProps)(Demo)
