import React from 'react';

import Button from './Button';
import { Field, reduxForm } from 'redux-form';

class AddPersonForm extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render()
    { 
        const {handleSubmit, isValid } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <Field name="lastName" component="input" type="text" />
                </div>
                
                <Button  type="submit">Add</Button>
            </form>
        );
    }
}

AddPersonForm = reduxForm({
  form: 'addPerson' // a unique name for this form
})(AddPersonForm);

export default AddPersonForm;