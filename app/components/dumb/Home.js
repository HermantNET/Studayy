'use strict';

import React from 'react';

import {StyleSheet, View, Text, ViewPagerAndroid} from 'react-native';

const Home = () => <View style={styles.pager}>
	<ViewPagerAndroid initialPage={0} style={styles.pager}>
		<View style={styles.page}>
			<Text>Graph</Text>
			<Text>Today's Goals</Text>
			<Text>Add goal</Text>
		</View>
		<View style={styles.page}>
			<Text>Tasks List</Text>
			<Text>Mark task as done</Text>
		</View>
	</ViewPagerAndroid>
</View>;

const styles = StyleSheet.create({
	pager: {
		flex: 1
	},
	page: {
		alignItems: 'center',
		padding: 20
	}
});

export default Home;
