import {
  TOGGLE_SHOW_SUBJECT_TASKS,
  SET_SELECTED_TASK,
  TOGGLE_SHOW_TASK_DETAILS
} from '../actions/actions';

export default function(state = {}, action) {
  switch (action.type) {
    case TOGGLE_SHOW_SUBJECT_TASKS:
      return Object.assign({}, state, {
        showSubjectTasks: state.showSubjectTasks
          .some((index) => index === action.subjectIndex)
          ? state.showSubjectTasks
            .filter((index) => index !== action.subjectIndex)
          : state.showSubjectTasks
            .concat(action.subjectIndex)
      });
    case SET_SELECTED_TASK:
      return Object.assign({}, state, {selectedTask: action.task});
    case TOGGLE_SHOW_TASK_DETAILS:
      return Object.assign({}, state, {showTaskDetails: !state.showTaskDetails});
    default:
      return state;
  }
}
