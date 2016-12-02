import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import Button from './Button';
import { pure } from 'recompose';
import { Link } from 'react-router';
import CheckBox from './CheckBox';

const Person = props => {
        
    const { person, deletePerson, activateEditingOn } = props;    
    // same as
    // const person = props.person;

    const classes = cx(
        styles.root, {
            // new JS supports property keys from variable names, use []
            [styles.male]: person.gender === 'm',
            [styles.female]: person.gender === 'f'            
        }
    );    
   

    const actionClasses = cx(
        {
            [styles.commandArea]: true,
            [styles.hiddenCommand]: activateEditingOn
        }
    );

    // <Button onClick={e => deletePerson(person)}>Delete</Button>
    return (
        <div className={classes}>
            <div className={styles.name}>
                <Link className={styles.cleanLink} to={`/person/${person.id}`}>{person.firstName} {person.lastName}</Link>
            </div>
            <div className={actionClasses}>                
                <CheckBox />
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
