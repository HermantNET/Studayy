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

// *----------------------------------------------------*
// Subject REST actions
export function createSubject(name, days) {
	return {type: actions.CREATE_SUBJECT, name, days};
}

// *----------------------------------------------------*
// Navigation
export function loadPage(page, title, subtitle) {
	return {type: actions.LOAD_PAGE, page, title, subtitle};
}

export function slideChanged(index) {
	return {type: actions.SLIDE_CHANGED, index};
}

// *----------------------------------------------------*
// interactions
export function toggleShowSubjectTasks(subjectIndex) {
	return {type: actions.TOGGLE_SHOW_SUBJECT_TASKS, subjectIndex};
}

export function setSelectedTask(task) {
	return {type: actions.SET_SELECTED_TASK, task};
}

export function toggleShowTaskDetails() {
	return {type: actions.TOGGLE_SHOW_TASK_DETAILS};
}
