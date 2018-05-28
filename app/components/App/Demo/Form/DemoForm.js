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

    submit = (e) => {
        e.preventDefault();
        if (typeof this.formApi.errors !== 'undefined') {
            return;
        }

        // DatePicker gets added to form before submitting
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

            // all form elemnts gets wrapped inside of a variable (formApi)
            // onSubmit key on form tag stores the whole form state in real-time
            // external form components (like DatePicker) must be handled separately
            // when submit button gets clicked, all form data gets passed to a callback function

            <Form>
            {formApi => (
              <form onSubmit={this.mapFormToComponent(formApi)} id="form1" className="mb-4">
                <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                <label htmlFor="hello">Hello World</label>
                <Text field="hello" id="hello" validate={validate} />
                <button type="submit" className="btn btn-primary" onClick={this.submit}>
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
