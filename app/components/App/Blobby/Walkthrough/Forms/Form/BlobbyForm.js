import React from 'react';
import { Form, Text, TextArea, Radio, RadioGroup } from 'react-form';

class BlobbyForm extends React.Component {

    constructor() {
        super();
    }

    mapFormToComponent = (formApi) => {
        this.formApi = formApi;
    }

    submit = (e) => {
        e.preventDefault();
        if (typeof this.formApi.errors !== 'undefined') {
            return;
        }

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
            // when submit button gets clicked, all form data gets passed to a callback function

            <Form>
            {formApi => (
                <div className="row">
                    <form onSubmit={this.mapFormToComponent(formApi)} id="form1" className="mb-4">

                        <label htmlFor="name">Name</label>
                        <Text type="text" field="name" id="name" />

                        <label htmlFor="gender">Gender</label>
                        <RadioGroup field="gender">
                            <label htmlFor="radio-input-male" className="mr-2">Male</label>
                            <Radio value="male" id="radio-input-male" />
                            <label htmlFor="radio-input-female" className="mr-2">Female</label>
                            <Radio value="female" id="radio-input-female" />
                            <label htmlFor="radio-input-beyond" className="mr-2">Blobbies culture goes beyond gender labels</label>
                            <Radio value="beyond" id="radio-input-beyond" />
                        </RadioGroup>
                        {
                          /*
                          <label htmlFor="hello">Hello World</label>
                          <Text type="text" className="u-full-width" field="hello" id="hello" validate={validate} />
                          {(typeof formApi.errors !== 'undefined') && <p>{formApi.errors.hello}</p>}
                          */
                        }

                        <label htmlFor="age">Age</label>
                        <Text type="text" field="age" id="age" />

                        <label htmlFor="text-area-input-description">Description</label>
                        <TextArea field="description" id="text-area-input-description" />

                        <input type="submit" className="btn btn-primary" onClick={this.submit} value="Add"/>
                    </form>
                </div>
            )}
            </Form>
        );
    }
}

export default BlobbyForm;
