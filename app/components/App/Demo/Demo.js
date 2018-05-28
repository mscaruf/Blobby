import React from 'react';
import { connect } from 'react-redux';

import * as DemoActions from '../../../actions/functions/demo';

import DemoForm from './Form/DemoForm';

class Demo extends React.Component {

    constructor() {
        super();
    }

    componentDidMount(){
        this.props.dispatch(DemoActions.setAppName("DemoApp"));
        this.props.dispatch(DemoActions.fetchFromApi());
    }

    getApiData(){
        return (
            <div>{(this.props.apiData !== null)
              ? this.props.apiData.title : "loading..." }</div>
          );
    }

    sendDataToApi = (data) => {
        this.props.dispatch(DemoActions.sendSomeStuffToApi(data));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2>AppName:</h2>
                    <h3>{this.props.appName}</h3>
                    <code>Some code!</code>
                    {this.getApiData()}
                </div>
                <DemoForm callback={this.sendDataToApi} />
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
