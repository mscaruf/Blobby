import React from 'react';
import { connect } from 'react-redux';
import * as DemoActions from '../../../actions/functions/demo';

class Demo extends React.Component {

    componentDidMount() {
        this.props.dispatch(DemoActions.setAppName("DemoApp"));
        this.props.dispatch(DemoActions.fetchFromApi())
    }

    getApiData(){
        return (
            <div>{(this.props.apiData !== null)
              ? this.props.apiData.title : "loading..." }</div>
          );
    }

    render() {
        return (
            <div>
                <h2>AppName:</h2>
                <h3>{this.props.appName}</h3>
                {this.getApiData()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        appName: state.demoReducer.appName,
        apiData: state.demoReducer.apiData
    };
}

export default connect(mapStateToProps)(Demo)
