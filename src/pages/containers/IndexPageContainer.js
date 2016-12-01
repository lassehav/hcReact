import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from '../IndexPage';
import { deletePerson, addPerson } from '../../ducks/person'

export default connect (
    state => ({
        persons: state.person.get('persons'),
        loading: state.generic.get('loading'),
    }),
    dispatch => bindActionCreators(
        {
            addPerson,
            deletePerson
        },
        dispatch
    )

)(IndexPage);