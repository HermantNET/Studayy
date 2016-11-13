import {GET_SUBJECT, CREATE_SUBJECT, DELETE_SUBJECT, EDIT_SUBJECT, EXPAND_SUBJECT} from '../actions/actions.js';

export default function (state = [], action) {
	switch (action.type) {
		case EXPAND_SUBJECT:
			return [
				...state.slice(0, action.subject),
				Object.assign({}, state[action.subject], {
					expanded: !state[action.subject].expanded
				}),
				...state.slice(parseInt(action.subject) + 1)
			];
		default:
			return state;
	}
}
