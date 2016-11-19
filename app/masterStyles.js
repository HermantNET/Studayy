import {StyleSheet} from 'react-native';

export const pallete = {};

const masterStyles = StyleSheet.create({
	pageTop: {
		flexBasis: 600,
		flexShrink: 300,
		flexGrow: 2500,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	pageCenter: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	containerSpace: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},

	flexRow: {
		flexDirection: 'row'
	},

	listItem: {
		flex: 1,
		padding: 14,
		fontSize: 16,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: 'grey'
	},
	listSubItem: {
		padding: 14,
		fontSize: 12,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: 'lightgrey',
		textAlign: 'right'
	},
	listItemContainer: {
		margin: 4,
		marginLeft: 30,
		marginRight: 30,
		elevation: 4,
		backgroundColor: 'beige'
	},
	listSubItemContainer: {
		margin: 6,
		marginLeft: 50,
		marginRight: 50,
		elevation: 2,
		backgroundColor: 'thistle'
	},

	textTitle: {
		fontSize: 24,
		margin: 10,
		textAlign: 'center'
	},
	textSubTitle: {
		fontSize: 16,
		marginBottom: 20,
		textAlign: 'center'
	},
	textLabel: {
		fontWeight: '700',
		textAlign: 'center'
	},

	marginVertical: {
		marginTop: 5,
		marginBottom: 5
	}
});

export default masterStyles;
