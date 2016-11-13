import {connect} from 'react-redux';
import {ListView} from 'react-native';
import {expandSubject, expandTask} from '../../actions/actionCreators';
import Subjects from '../dumb/pages/Subjects';

const mapStateToProps = (state, ownProps) => {
	return {
		subjects: state.subjects,
		dataSource: new ListView.DataSource({
			rowHasChanged: () => state.subjects !== ownProps.subjects
		}).cloneWithRows(state.subjects)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		expandSubject: (subjectIndex) => {
			dispatch(expandSubject(subjectIndex));
		},
		expandTask: (subjectIndex, taskIndex) => {
			dispatch(expandTask(subjectIndex, taskIndex));
		}
	};
};

const TaskManager = connect(mapStateToProps, mapDispatchToProps)(Subjects);

export default TaskManager;
TaskManager;
