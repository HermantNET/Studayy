import {StyleSheet} from 'react-native';

export const pallete = {};

const masterStyles = StyleSheet.create({
	pageTop: {
		flexBasis: 600,
		flexShrink: 300,
		flexGrow: 2500,
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
		margin: 5,
		padding: 10,
		fontSize: 20,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: 'grey',
		backgroundColor: 'beige',
		elevation: 4
	},
	listSubItem: {
		padding: 10,
		fontSize: 16,
		margin: 7,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: 'lightgrey',
		textAlign: 'right',
		elevation: 2
	},
	listEven: {
		backgroundColor: 'rgba(0,0,0,0.1)'
	},
	listOdd: {
		backgroundColor: 'rgba(0,0,0,0.2)'
	},
	textTitle: {
		fontSize: 24,
		paddingBottom: 10,
		textAlign: 'center'
	}
});

export default masterStyles;
