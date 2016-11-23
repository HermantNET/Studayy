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

export function editTask(subjectIndex, taskIndex, task) {
	return {type: actions.EDIT_TASK, subjectIndex, taskIndex, task};
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

export function setSelectedTask(subjectIndex, taskIndex) {
	return {type: actions.SET_SELECTED_TASK, subjectIndex, taskIndex};
}

export function toggleShowTaskDetails() {
	return {type: actions.TOGGLE_SHOW_TASK_DETAILS};
}
