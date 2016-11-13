import {connect} from 'react-redux';
import {ListView} from 'react-native';
import {expandSubject} from '../../actions/actionCreators';
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
		expandSubject: (subject) => {
			dispatch(expandSubject(subject));
		}
	};
};

const TaskManager = connect(mapStateToProps, mapDispatchToProps)(Subjects);

export default TaskManager;
TaskManager;
