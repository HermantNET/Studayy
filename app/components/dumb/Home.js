'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

class Home extends Component {
	render() {
		return (
			<View>
				<Text>Navmenu</Text>
				<Text>Studayy</Text>
				<Text>Today's Goals</Text>
				<Text>Add goal</Text>
				<Text>Mark task as done</Text>
				<Text>Graph</Text>
				<Text>Tasks List</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});


export default Home;