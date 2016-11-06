'use strict';

import React from 'react';

import {StyleSheet, ToolbarAndroid} from 'react-native';

const Toolbar = (props) => {
	return <ToolbarAndroid
		actions={[{
			title: 'Options',
			show: 'always',
			showWithText: true
		}
	]}
		logo={props.logo}
		style={styles.Toolbar}
		subtitle={props.subtitle}
		title={props.title}
	       />;
};

const styles = StyleSheet.create({
	Toolbar: {
		height: 56,
		backgroundColor: 'lightgrey'
	}
});

export default Toolbar;
