import React from 'react';
import { connect } from 'react-redux';
import * as DemoActions from '../../../actions/functions/demo';
import { Form, Text } from 'react-form';

class Demo extends React.Component {

    componentDidMount() {
        this.props.dispatch(DemoActions.setAppName("DemoApp"));
        this.props.dispatch(DemoActions.fetchFromApi());
        this.props.dispatch(DemoActions.sendSomeStuffToApi());
    }

    getApiData(){
        return (
            <div>{(this.props.apiData !== null)
              ? this.props.apiData.title : "loading..." }</div>
          );
    }

    getSubmitResult = (formApi) => {
        this.formValues = formApi.values;
        this.formApi = formApi;
        //this.setState({formValues: formApi.values});
    }

    outerSubmit = (e) => {
        e.preventDefault();
        console.log("CIAONE!");
        debugger;
    }

    render() {
        const validate = value => ({
            error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
            warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
            success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
            })

        return (
            <div>
                <h2>AppName:</h2>
                <h3>{this.props.appName}</h3>
                {this.getApiData()}

                <Form>
                {formApi => (
                  <form onSubmit={this.getSubmitResult(formApi)} id="form1" className="mb-4">
                    <label htmlFor="hello">Hello World</label>
                    <Text field="hello" id="hello" validate={validate} />
                    <button type="submit" className="btn btn-primary" onClick={this.outerSubmit}>
                      Submit
                    </button>
                    {(typeof formApi.errors !== 'undefined') && <p>{formApi.errors.hello}</p>}
                  </form>
                )}
                </Form>
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
