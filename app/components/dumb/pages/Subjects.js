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
							expandSubject={props.expandSubject}
							index={subjectIndex}
							item={subject}
						/>
						{subject.expanded
							? <View>
								{subject.tasks.map((task, taskIndex) => {
											return (
												<View key={taskIndex}>
													<ListSubItem
														expandTask={props.expandTask}
														item={task}
														subjectIndex={subjectIndex}
														taskIndex={taskIndex}
													/>
													<TaskDetails
														expandTask={props.expandTask}
														subjectIndex={subjectIndex}
														subjectName={subject.name}
														task={task}
														taskIndex={taskIndex}
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
		</ScrollView>
	);
};

export default Subjects;
