import {EDIT_TASK} from '../actions/actions.js';

export default function (state = [], action) {
	switch (action.type) {
		case EDIT_TASK:
			return [
				...state.slice(0, action.taskIndex),
				action.task,
				...state.slice(action.taskIndex + 1)
			];
		default:
			return state;
	}
}
