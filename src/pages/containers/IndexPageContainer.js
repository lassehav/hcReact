import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from '../IndexPage';
import { deletePerson, addPerson } from '../../ducks/person';
import { editMales } from '../../ducks/personList';

export default connect (
    state => ({
        persons: state.person.get('persons'),
        loading: state.generic.get('loading'),
        editingMales: state.personList.get('editingMales'),        
    }),
    dispatch => bindActionCreators(
        {
            addPerson,
            deletePerson,
            editMales
        },
        dispatch
    )

)(IndexPage);