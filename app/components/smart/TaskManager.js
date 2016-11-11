import React from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import * as actionCreators from '../../actions/actionCreators';
import Tasks from '../dumb/pages/Tasks';

const mapStateToProps = (state, ownProps) => {
	return {
		subjects: state.subjects,
		dataSource: new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		}).cloneWithRows(state.subjects)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const TaskManager = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TaskManager;
TaskManager;
