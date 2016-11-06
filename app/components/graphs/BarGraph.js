import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class BarGraph extends Component {
	animate() {}
	render() {
		return (
			<View style={styles.graph}>
				<Text>Cats</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({graph: {}});

export default BarGraph;
