import { List, Map } from 'immutable';
import personService from '../services/personService';

const defaultState = Map({
  persons: List(),
});

/*
// Action esimerkkejä

const action = {
  type: 'SOMETHING',
  payload: 'jotaki'
};

function actionCreator(param)
{
  return { type: 'SOMETHING' };
}
*/

export function addPerson(person) {
  return {
    type: 'PERSON_ADD',
    payload: person,    
  }
}

export function deletePerson(person) {
  return {
    type: 'PERSON_DELETE',
    payload: person,    
  }
}

export function getPersons() {
  return {
    type: 'PERSONS_GET',
    payload: personService.getPersons()   
  }
}

export default function (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'PERSON_ADD':
      return state.update('persons', persons => persons.push(payload));

    case 'PERSON_DELETE':
      return state.update('persons', persons => persons.filterNot(p => p.id === payload.id));

    case 'PERSONS_GET_FULFILLED': // promise middleware will emit this event, when PERSON_GET action is finished
      return state.set('persons', List(payload));
      
    default:
      return state;
  }
}
