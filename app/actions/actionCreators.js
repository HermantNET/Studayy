// Action creators
import * as actions from './actions.js';

// *----------------------------------------------------*
// Task REST actions
export function createTask(subject, name, estimatedTime, actualTime, finishBy, days, distribute) {
	return {
		type: actions.CREATE_TASK,
		subject,
		name,
		estimatedTime,
		actualTime,
		finishBy,
		days,
		distribute
	};
}
// Task other actions
export function expandTask(subjectIndex, taskIndex) {
	return {type: actions.EXPAND_TASK, subjectIndex, taskIndex};
}

// *----------------------------------------------------*
// Subject REST actions
export function createSubject(name, days) {
	return {type: actions.CREATE_SUBJECT, name, days};
}
// Subject other actions
export function expandSubject(subjectIndex) {
	return {type: actions.EXPAND_SUBJECT, subjectIndex};
}
// *----------------------------------------------------*
// Navigation
export function loadPage(page, title, subtitle) {
	return {type: actions.LOAD_PAGE, page, title, subtitle};
}

export function slideChanged(index) {
	return {type: actions.SLIDE_CHANGED, index};
}
