// Action creators
import * as actions from './actions.js';

function foo() {
  return {
    type: actions.foo
  }
}

function createTask(subject, name, time, finishBy) {
	return {
		type: actions.CREATE_TASK,
		subject,
		name,
		time,
		finishBy
	}
}