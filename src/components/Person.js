import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import Button from './Button';
import { pure } from 'recompose';
import { Link } from 'react-router';

const Person = props => {
        
    const { person, deletePerson } = props;
    // same as
    // const person = props.person;

    const classes = cx(
        styles.root, {
            // new JS supports property keys from variable names, use []
            [styles.male]: person.gender === 'm',
            [styles.female]: person.gender === 'f'
        }
    );

    return (
        <div className={classes}>
            <div className={styles.name}>
                <Link to={`/person/${person.id}`}>{person.firstName} {person.lastName}</Link>
            </div>
            <div className={styles.actionButton}>
                <Button onClick={e => deletePerson(person)}>Delete</Button>
            </div>
        </div>
    );
}

Person.propTypes = {
    person: React.PropTypes.object.isRequired,
    deletePerson: React.PropTypes.func.isRequired,   
};

Person.defaultProps = {

};

export default pure(Person);
