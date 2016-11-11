import React from 'react';
import {ScrollView, View, Text, StyleSheet, ListView} from 'react-native';
import ms from '../../../masterStyles';

const Tasks = (props) => {
	return (
		<ScrollView contentContainerStyle={ms.pageCenter}>
			<ListView
				dataSource={props.dataSource}
				renderRow={(subject) => <Text>{subject.name}</Text>}
			/>
		</ScrollView>
	);
};
const styles = StyleSheet.create({});

export default Tasks;
