import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../App';
import { getPersons, deletePerson, addPerson } from '../../ducks/person'

export default connect (
    state => ({        
        loading: state.generic.get('loading'),
    }),
    dispatch => bindActionCreators(
        {
            getPersons
        },
        dispatch
    )

)(App);