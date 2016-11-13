import {
	GET_SUBJECT,
	CREATE_SUBJECT,
	DELETE_SUBJECT,
	EDIT_SUBJECT,
	EXPAND_SUBJECT,
	EXPAND_TASK
} from '../actions/actions.js';
import tasks from './tasks';

export default function (state = [], action) {
	switch (action.type) {
		case EXPAND_SUBJECT:
			return [
				...state.slice(0, action.subjectIndex),
				Object.assign({}, state[action.subjectIndex], {
					expanded: !state[action.subjectIndex].expanded
				}),
				...state.slice(parseInt(action.subjectIndex) + 1)
			];
		case EXPAND_TASK:
			return [
				...state.slice(0, action.subjectIndex),
				Object.assign({}, state[action.subjectIndex], {
					tasks: tasks(state[action.subjectIndex].tasks, action)
				}),
				...state.slice(parseInt(action.subjectIndex) + 1)
			];
		default:
			return state;
	}
}
