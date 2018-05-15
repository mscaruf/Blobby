import React from 'react';
import { connect } from 'react-redux';
import * as DemoActions from '../../../actions/functions/demo';

class Demo extends React.Component {

    componentDidMount() {
        this.props.dispatch(DemoActions.FetchFromApi());
    }

    getApiData(){
        return (
            <div>{(this.props.apidata[0] !== undefined)
              ? this.props.apidata[0].apidata.title : "loading..." }</div>
          );
    }

    render() {
        return (
            <div>
                <h2>Fetching stuff from an api:</h2>
                {this.getApiData()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        apidata: state.demo
    };
}

export default connect(mapStateToProps)(Demo)
