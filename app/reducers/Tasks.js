import {EXPAND_TASK} from '../actions/actions.js';

export default function (state = [], action) {
	switch (action.type) {
		case EXPAND_TASK:
			return [
				...state.slice(0, action.taskIndex),
				Object.assign({}, state[action.taskIndex], {
					expanded: !state[action.taskIndex].expanded
				}),
				...state.slice(action.taskIndex + 1)
			];
		default:
			return state;
	}
}
