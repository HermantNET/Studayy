import {connect} from 'react-redux';
import {ListView} from 'react-native';
import {
	toggleShowTaskDetails,
	toggleShowSubjectTasks,
	setSelectedTask,
	editTask
} from '../../actions/actionCreators';
import Subjects from '../dumb/pages/Subjects';

const mapStateToProps = (state, ownProps) => {
	return {
		subjects: state.subjects,
		showSubjectTasks: state.interactions.showSubjectTasks,
		selectedTask: state.interactions.selectedTask,
		showTaskDetails: state.interactions.showTaskDetails,
		dataSource: new ListView.DataSource({
			rowHasChanged: () => {
				return (
					state.interactions.showSubjectTasks !== ownProps.showSubjectTasks ||
					state.subjects !== ownProps.subjects
				);
			}
		}).cloneWithRows(state.subjects)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleShowSubjectTasks: (subjectIndex) => {
			dispatch(toggleShowSubjectTasks(subjectIndex));
		},
		toggleShowTaskDetails: () => {
			dispatch(toggleShowTaskDetails());
		},
		setSelectedTask: (subjectIndex, taskIndex, task) => {
			dispatch(setSelectedTask(subjectIndex, taskIndex, task));
		},
		editTask: (subjectIndex, taskIndex, task) => {
			dispatch(editTask(subjectIndex, taskIndex, task));
		}
	};
};

const TaskManager = connect(mapStateToProps, mapDispatchToProps)(Subjects);

export default TaskManager;
TaskManager;
