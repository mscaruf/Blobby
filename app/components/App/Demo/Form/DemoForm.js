import React from 'react';
import DatePicker from 'react-datepicker';
import { Form, Text } from 'react-form';
import moment from 'moment';

class DemoForm extends React.Component {

    constructor() {
        super();
        this.state = {startDate: moment()};
    }

    handleChange = (date) => {
        this.setState({startDate: date});
    }

    mapFormToComponent = (formApi) => {
        this.formApi = formApi;
    }

    outerSubmit = (e) => {
        e.preventDefault();
        if (typeof this.formApi.errors !== 'undefined') {
            return;
        }
        this.formApi.values.startDate = this.state.startDate.format("DD-MM-YYYY");
        this.props.callback(this.formApi.values);
    }

    render(){
      const validate = value => ({
          error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
          warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
          success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
          })

        return(
            <Form>
            {formApi => (
              <form onSubmit={this.mapFormToComponent(formApi)} id="form1" className="mb-4">
                <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                <label htmlFor="hello">Hello World</label>
                <Text field="hello" id="hello" validate={validate} />
                <button type="submit" className="btn btn-primary" onClick={this.outerSubmit}>
                  Submit
                </button>
                {(typeof formApi.errors !== 'undefined') && <p>{formApi.errors.hello}</p>}
              </form>
            )}
            </Form>
        );
    }
}

export default DemoForm;
