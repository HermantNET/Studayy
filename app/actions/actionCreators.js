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
// Subject REST actions Subject other actions
export function expandSubject(subject) {
	return {type: actions.EXPAND_SUBJECT, subject};
}
// *----------------------------------------------------*
// Navigation
export function loadPage(page, title, subtitle) {
	return {type: actions.LOAD_PAGE, page, title, subtitle};
}

export function slideChanged(index) {
	return {type: actions.SLIDE_CHANGED, index};
}
