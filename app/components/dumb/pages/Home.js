import React from 'react';
import {StyleSheet, View, Text, ViewPagerAndroid} from 'react-native';
import ms from '../../../masterStyles';

const Home = (props) => <View style={styles.pager}>
	<ViewPagerAndroid
		initialPage={0}
		onPageSelected={(e) => {
			props.onSlideChange(e.nativeEvent.position);
		}}
		style={styles.pager}
	>
		<View style={ms.pageCenter}>
			<Text>Graph</Text>
			<Text>Today's Goals</Text>
			<Text>Add goal</Text>
		</View>
		<View style={ms.pageCenter}>
			<Text>Tasks List</Text>
			<Text>Mark task as done</Text>
		</View>
	</ViewPagerAndroid>
</View>;

const styles = StyleSheet.create({
	pager: {
		flex: 1
	}
});

export default Home;
