'use strict';

import React from 'react';

import {StyleSheet, View} from 'react-native';

// Components
import Toolbar from './Toolbar';
import Footer from './Footer';

const Layout = (props) => {
	return (
		<View style={styles.layout}>
			<Toolbar subtitle={props.subtitle} title={props.title}/>
			<View style={styles.content}>
				{props.currentPage}
			</View>
			<Footer items={props.pages} onTabClick={props.onTabClick}/>
		</View>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: 'space-between'
	},
	content: {
		flex: 1
	}
});

export default Layout;
