import React from 'react';
import {View, ScrollView, Text, ListView, TouchableHighlight} from 'react-native';
import ms from '../../../masterStyles';

const Subjects = (props) => {
	return (
		<ScrollView
			contentContainerStyle={[ms.pageTop, ms.flexRow]}
		>
			<ListView
				dataSource={props.dataSource}
				renderHeader={() => <Text style={ms.textTitle}>Subjects</Text>}
				renderRow={(subject, _, rowId) => {
				return (
					<View>
						<TouchableHighlight
							onPress={() => {
							props.expandSubject(rowId);
						}}
							underlayColor="#CCBB00"
						>
							<View>
								<Text style={ms.listItem}>
									{subject.name}
								</Text>
							</View>
						</TouchableHighlight>
						{subject.expanded
							? <View>
								{subject
										.tasks
										.map((task, index) => {
											return (
												<TouchableHighlight
													key={index}
													onPress={() => {}}
													underlayColor="#CCBB00"
												>
													<Text
														style={[
														ms.listSubItem, index % 2
															? ms.listOdd
															: ms.listEven
													]}
													>{task.name}</Text>
												</TouchableHighlight>
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
