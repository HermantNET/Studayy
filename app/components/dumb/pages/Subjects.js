import React from 'react';
import {
	View,
	ScrollView,
	Text,
	ListView,
	Modal,
	TouchableHighlight
} from 'react-native';
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
					// TODO turn into listItem component
					<View>
						<TouchableHighlight
							onPress={() => {
							props.expandSubject(subjectIndex);
						}}
							style={ms.listItemContainer}
							underlayColor="#CCBB00"
						>
							<View>
								<Text
									ellipsizeMode="tail"
									numberOfLines={1}
									style={ms.listItem}
								>
									{subject.name}
								</Text>
							</View>
						</TouchableHighlight>
						{subject.expanded
							? <View>
								{subject
										.tasks
										.map((task, taskIndex) => {
											return (
												// TODO turn into listSubItem component
												<View key={taskIndex}>
													<TouchableHighlight
														onPress={() => {
														props.expandTask(subjectIndex, taskIndex);
													}}
														style={ms.listSubItemContainer}
														underlayColor="#CCBB00"
													>
														<Text
															ellipsizeMode="tail"
															numberOfLines={1}
															style={ms.listSubItem}
														>
															{task.name}
														</Text>
													</TouchableHighlight>
													<Modal
														animationType="slide"
														onRequestClose={() => {
															props.expandTask(subjectIndex, taskIndex);
														}}
														visible={task.expanded}
													>
														<View style={ms.pageCenter}>
															<Text>{task.name}</Text>
														</View>
													</Modal>
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
