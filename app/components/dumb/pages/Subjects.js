import React from 'react';
import {
	View,
	ScrollView,
	Text,
	ListView
} from 'react-native';

// Components
import ListItem from '../ListItem';
import ListSubItem from '../ListSubItem';
import TaskDetails from '../TaskDetails';

// Styles
import ms from '../../../masterStyles';


const Subjects = (props) => {
	return (
		<ScrollView
			contentContainerStyle={[ms.pageTop, ms.flexRow]}
		>
			<ListView
				dataSource={props.dataSource}
				renderFooter={() => <Text style={ms.textTitle}>Footer</Text>}
				renderHeader={() => <Text style={ms.textTitle}>Subjects</Text>}
				renderRow={(subject, _, subjectIndex) => {
				return (
					<View>
						<ListItem
							index={subjectIndex}
							item={subject}
							toggleShowSubjectTasks={props.toggleShowSubjectTasks}
						/>
						{props.showSubjectTasks.some((index) => index === subjectIndex)
							? <View>
								{subject.tasks.map((task, taskIndex) => {
											return (
												<View key={taskIndex}>
													<ListSubItem
														item={task}
														setSelectedTask={props.setSelectedTask}
														subjectIndex={subjectIndex}
														taskIndex={taskIndex}
														toggleShowTaskDetails={props.toggleShowTaskDetails}
													/>
												</View>
											);
										})}
							</View>
							: null}
					</View>
				);
			}}
			/>
			<TaskDetails
				showTaskDetails={props.showTaskDetails}
				subjectName={props.selectedTask.subjectIndex === null
					? null
					: props.subjects[props.selectedTask.subjectIndex].name}
				task={props.selectedTask.taskIndex === null
					? null
					: props.subjects[props.selectedTask.subjectIndex]
						.tasks[props.selectedTask.taskIndex]}
				toggleShowTaskDetails={props.toggleShowTaskDetails}
			/>
		</ScrollView>
	);
};

export default Subjects;
