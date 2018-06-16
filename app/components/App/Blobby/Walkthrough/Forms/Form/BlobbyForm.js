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

        return(

            // all form elemnts gets wrapped inside of a variable (formApi)
            // onSubmit key on form tag stores the whole form state in real-time
            // when submit button gets clicked, all form data gets passed to a callback function

            <Form>
            {formApi => (
                <div className="row">
                    <form onSubmit={this.mapFormToComponent(formApi)} id="form1" className="mb-4">

                        <div className="row">
                            <div className="six columns">
                                <label htmlFor="name">Name</label>
                                <Text type="text" field="name" id="name" />
                            </div>
                            <div className="six columns">
                                <label htmlFor="age">Age</label>
                                <Text type="text" field="age" id="age" />
                            </div>
                        </div>
                        <label htmlFor="gender">Gender</label>
                        <div className="row">
                            <RadioGroup field="gender">
                                <div className="four columns">
                                    <label htmlFor="radio-input-male" className="mr-2">Male</label>
                                    <Radio value="male" id="radio-input-male" />
                                </div>
                                <div className="four columns">
                                    <label htmlFor="radio-input-female" className="mr-2">Female</label>
                                    <Radio value="female" id="radio-input-female" />
                                </div>
                                <div className="four columns">
                                    <label htmlFor="radio-input-beyond" className="mr-2">Beyond gender labels</label>
                                    <Radio value="beyond" id="radio-input-beyond" />
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="row">
                            <div className="twelve columns">
                                <label htmlFor="text-area-input-description">Description</label>
                                <TextArea field="description" id="text-area-input-description" />
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" className="btn btn-primary" onClick={this.submit} value="Add"/>
                        </div>
                    </form>
                </div>
            )}
            </Form>
        );
    }
}

export default BlobbyForm;
