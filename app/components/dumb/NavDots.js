import React from 'react';
import {View, StyleSheet} from 'react-native';

const NavDots = (props) => {
	return (
		<View style={styles.container}>
			{new Array(props.slideCount)
				.fill(null)
				.map((_, index) => <View
					key={index}
					style={[
					styles.dot, index === props.currentSlide
						? styles.active
						: null
				]}
				                   />)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 20
	},
	dot: {
		width: 8,
		height: 8,
		margin: 3,
		borderRadius: 10,
		backgroundColor: 'blue'
	},
	active: {
		backgroundColor: 'red'
	}
});

export default NavDots;
