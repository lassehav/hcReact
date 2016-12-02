import { List, Map } from 'immutable';

const defaultState = Map({
    editingMales: false,
    editingFemales: false,
    actionTargets: List(),
});

export function editMales()
{
    return {
        type: 'PERSONLIST_EDIT_MALES',
        payload: null
    };
}

export default function (state = defaultState, action) {
    const {type, payload} = action;

    switch (type) {
        case 'PERSONLIST_EDIT_MALES':            
            return state.update('editingMales', v => !v);
    
        default:
            return state;
    }
}