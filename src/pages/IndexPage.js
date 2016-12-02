import React from 'react';
import Person from '../components/Person';
import PersonList from '../components/PersonList';
import AddPersonForm from '../components/AddPersonForm';
import { List } from 'immutable';
import personService from '../services/personService';
import Button from '../components/Button';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(data) {
        const { addPerson } = this.props;
        const newPerson = {
            ...personService.generatePerson(),
            firstName: data.firstName,
            lastName: data.lastName,
        };

        addPerson(newPerson);
        console.log(data);
    }


    render() {
        const { persons, addPerson, deletePerson, editMales, ...rest } = this.props;
        console.log("indexpage");
        console.log(this.props);

        return (
            <div>
            <AddPersonForm onSubmit={this.handleSubmit}/>
            <Button onClick={editMales}>Test</Button>
            <PersonList title="Miehet" activateEditingOn={this.props.editingMales} persons={persons.filter(p=>p.gender === 'm')} deletePerson={deletePerson} />
            <PersonList title="Naiset" persons={persons.filter(p=>p.gender === 'f')} deletePerson={deletePerson} />
            </div>
        );
    }  
};

export default Index;
