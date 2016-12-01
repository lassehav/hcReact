import React from 'react';
import Person from './Person';
import styles from './App.pcss';
import PersonList from './PersonList';
import personService from '../services/personService';
import AddPersonForm from './AddPersonForm';
import Loading from './Loading';
import { List } from 'immutable';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: List(),
        };

        this.deletePerson = this.deletePerson.bind(this);
        this.addPerson = this.addPerson.bind(this);
    }

    componentDidMount() {
        personService.getPersons().then(persons => {
            this.setState( {persons: List(persons) });
        });
    }

    deletePerson(person) {
        this.setState({
            persons: this.state.persons.filter(p => p.id !== person.id),
        });
    }

    addPerson(person)
    {
        this.setState({
            persons: this.state.persons.push(person),
        });
    }



    render() {
        const { persons } = this.state;

        if(persons.count() === 0)
        {
            return (
                <div className={styles.root}>
                    <h1>Helous world</h1>
                    <Loading />
                </div>);
        }

        return (
            <div className={styles.root}>
                <h1>Helous world</h1>

                <AddPersonForm addPerson={this.addPerson} />

                <PersonList title="Miehet" persons={persons.filter(p=>p.gender === 'm')} deletePerson={this.deletePerson} />
                <PersonList title="Naiset" persons={persons.filter(p=>p.gender === 'f')} deletePerson={this.deletePerson} />
            </div>
        );
    }  
};

export default App;
