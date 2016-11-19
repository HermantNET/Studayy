import React, {Component} from 'react';
import {
	View,
	ScrollView,
	Text,
	ListView,
	UIManager,
	LayoutAnimation
} from 'react-native';

// Components
import ListItem from '../ListItem';
import ListSubItem from '../ListSubItem';
import TaskDetails from '../TaskDetails';

// Styles
import ms from '../../../masterStyles';


class Subjects extends Component {
	constructor(props) {
		super(props);
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}
	componentWillUpdate() {
		LayoutAnimation.configureNext({
			duration: 500,
			create: {
				type: LayoutAnimation.Types.spring,
				property: LayoutAnimation.Properties.scaleXY
			},
			update: {
				type: LayoutAnimation.Types.spring
			}
		});
	}
	render() {
		return (
			<ScrollView
				contentContainerStyle={[ms.pageTop, ms.flexRow]}
			>
				<ListView
					dataSource={this.props.dataSource}
					renderFooter={() => <Text style={ms.textTitle}>Footer</Text>}
					renderHeader={() => <Text style={ms.textTitle}>Subjects</Text>}
					renderRow={(subject, _, subjectIndex) => {
					return (
						<View>
							<ListItem
								index={subjectIndex}
								item={subject}
								toggleShowSubjectTasks={this.props.toggleShowSubjectTasks}
							/>
							<View>
								{this.props.showSubjectTasks.some((index) => index === subjectIndex)
									? subject.tasks.map((task, taskIndex) => {
													return (
														<View key={taskIndex}>
															<ListSubItem
																item={task}
																setSelectedTask={this.props.setSelectedTask}
																subjectIndex={subjectIndex}
																taskIndex={taskIndex}
																toggleShowTaskDetails={this.props.toggleShowTaskDetails}
															/>
														</View>
													);
												})
									: null}
							</View>
						</View>
					);
				}}
				/>
				<TaskDetails
					showTaskDetails={this.props.showTaskDetails}
					subjectName={this.props.selectedTask.subjectIndex === null
						? null
						: this.props.subjects[this.props.selectedTask.subjectIndex].name}
					task={this.props.selectedTask.taskIndex === null
						? null
						: this.props.subjects[this.props.selectedTask.subjectIndex]
							.tasks[this.props.selectedTask.taskIndex]}
					toggleShowTaskDetails={this.props.toggleShowTaskDetails}
				/>
			</ScrollView>
		);
	}
}

export default Subjects;
