import React from 'react';
import Person from '../components/Person';
import PersonList from '../components/PersonList';
import AddPersonForm from '../components/AddPersonForm';
import { List } from 'immutable';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const { persons, addPerson, deletePerson, loading } = this.props;

        return (
            <div>
            <AddPersonForm addPerson={addPerson} />

            <PersonList title="Miehet" persons={persons.filter(p=>p.gender === 'm')} deletePerson={deletePerson} />
            <PersonList title="Naiset" persons={persons.filter(p=>p.gender === 'f')} deletePerson={deletePerson} />
            </div>
        );
    }  
};

export default Index;
