// Action creators
import * as actions from './actions.js';

// *----------------------------------------------------*
// Task REST actions
export function createTask(subject, name, time, finishBy, days) {
	return {
		type: actions.CREATE_TASK,
		subject,
		name,
		time,
		finishBy,
		days
	};
}

// *----------------------------------------------------*
// Subject REST actions
// *----------------------------------------------------*
// Navigation
export function loadPage(page, title, subtitle) {
	return {type: actions.LOAD_PAGE, page, title, subtitle};
}

export function slideChanged(index) {
	return {type: actions.SLIDE_CHANGED, index};
}
