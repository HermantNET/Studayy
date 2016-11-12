import {StyleSheet} from 'react-native';

export const pallete = {};

const masterStyles = StyleSheet.create({
	pageTop: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: 20
	},
	pageCenter: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},
	flexRow: {
		flexDirection: 'row'
	},
	listItem: {
		flex: 1,
		padding: 10,
		fontSize: 20,
		borderTopWidth: 1,
		borderTopColor: 'grey'
	}
});

export default masterStyles;
