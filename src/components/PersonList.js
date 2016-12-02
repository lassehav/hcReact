import React from 'react';
import Person from './Person';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styles from './PersonList.pcss';

const PersonList = props => {
        
    // take persons and title from props, pass everything else to rest    
    const { persons, title, ...rest } = props;
        

    if(persons.length == 0){
        return false;
    }

    let avgAge = persons.reduce((acc, p) => {
        return acc + p.age; 
    }, 0);
    avgAge = avgAge / persons.count();

    return (
        <div className={styles.root}>
            <h2>{title}</h2>
            <div>
                Average age {avgAge}
            </div>
            {persons.map((p) => <Person key={p.id} person={p} {...rest}/>)}
        </div>
    );
}

PersonList.propTypes = {
    persons: ImmutablePropTypes.list.isRequired,
    title: React.PropTypes.string.isRequired,       
};

export default PersonList;
