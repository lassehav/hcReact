import React from 'react';
import { List } from 'immutable';
import {compose, wrapDisplayName } from 'recompose';

/*
function needsPersonEasy(BaseComponent) {
    return function needsPersonEasy(props)
    {
        const { person, ...rest } = props;
        if(!person)
        {
            return false;
        }
        return (<BaseComponent {...rest} person={person} />);
    }
}*/

// same as above, but with newer ES syntax
const needsPerson = BaseComponent => props => {
    const { person, ...rest } = props;
    if(!person)
    {
        return false;
    }

    return (<BaseComponent {...rest} person={person} />);
};

const PersonPage = props => {    
    
    const {person} = props;    

    return (
        <div>
        Hello Person {person.firstName} {person.lastName} !
        </div>
    );
};

// esimerkki recomposen composen käytöstä
export default compose(needsPerson,
                       needsPerson /* jne */)(PersonPage);

// meidän oma käyttö
//export default needsPerson(PersonPage);
