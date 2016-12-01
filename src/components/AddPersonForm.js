import React from 'react';
import personService from '../services/personService';
import Button from './Button';

class AddPersonForm extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValid() {
        return (this.state.firstName !== '') && (this.state.lastName !== '');
    }

    handleSubmit(e)
    {
        e.preventDefault();
        
        const { addPerson } = this.props;

        const newPerson = {
            ...personService.generatePerson(),
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };

        addPerson(newPerson);
    }

    handleChange(stateKey)
    {
        return (e) => {
            this.setState({
                [stateKey]: e.target.value,
            });
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" value={this.state.firstName} onChange={this.handleChange('firstName')} placeholder="First"/>
                </div>
                <div>
                    <input type="text" value={this.state.lastName} onChange={this.handleChange('lastName')} placeholder="Last"/>
                </div>
                <Button disabled={!this.isValid()} onClick={this.handleSubmit}>Add</Button>
            </form>
        );
    }

}

export default AddPersonForm;