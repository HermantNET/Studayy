import React from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	ListView,
	TouchableHighlight
} from 'react-native';
import ms from '../../../masterStyles';

const Tasks = (props) => {
	return (
		<ScrollView
			contentContainerStyle={[ms.pageTop, ms.flexRow]}
		>
			<ListView
				dataSource={props.dataSource}
				renderRow={(subject) => {
				return (
					<TouchableHighlight
						onPress={() => {}}
						underlayColor="#CCBB00"
					>
						<Text style={ms.listItem}>{subject.name}</Text>
					</TouchableHighlight>
				);
			}}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	Subject: {
		flex: 1
	}
});

export default Tasks;
