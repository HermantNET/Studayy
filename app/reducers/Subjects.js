import {
	GET_SUBJECT,
	CREATE_SUBJECT,
	DELETE_SUBJECT,
	EDIT_SUBJECT,
	EDIT_TASK
} from '../actions/actions.js';
import tasks from './tasks';

export default function (state = [], action) {
	switch (action.type) {
		case EDIT_TASK:
			return [
				...state.slice(0, action.subjectIndex),
				Object.assign({}, state[action.subjectIndex], {
					tasks: tasks(state[action.subjectIndex].tasks, action)
				}),
				...state.slice(action.subjectIndex + 1)
			];
		default:
			return state;
	}
}
