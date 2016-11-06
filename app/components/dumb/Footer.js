import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Footer = (props) => {
	return (
		<View style={styles.Container}>
			{props
				.items
				.map((item, index) => {
					return <FooterItem item={item} key={index} onTabClick={props.onTabClick}/>;
				})}
		</View>
	);
};

const FooterItem = (props) => {
	return (
		<TouchableHighlight
			onPress={props
			.onTabClick
			.bind(null, props.item, 'Studayy', props.item)}
			style={styles.item}
			underlayColor='#FFF'
		>
			<Text style={styles.text}>
				<Text>{props.item}</Text>
			</Text>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	Container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 56,
		backgroundColor: 'grey'
	},
	item: {
		flex: 1,
		alignItems: 'center'
	},
	text: {
		flex: 1
	}
});

export default Footer;
