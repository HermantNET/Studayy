import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight // TODO change to TouchableWithoutFeedback and implement custom button press style
} from 'react-native';

const Footer = (props) => (
	<View style={styles.Container}>
		{props.items.map((item, index) => (
			<TouchableHighlight key={index} style={styles.Item} onPress={() => {}} underlayColor='#FFF'>
				<Text>{item}</Text>
			</TouchableHighlight>
		))}
	</View>
);

const styles = StyleSheet.create({
	Container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 56,
		backgroundColor: 'grey'
	},
	Item: {
		flex: 1,
		alignItems: 'center'
	}
});

export default Footer;