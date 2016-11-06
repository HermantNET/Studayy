import React from 'react';
import {StyleSheet, View} from 'react-native';

// Components
import Toolbar from './Toolbar';
import Footer from './Footer';
import NavDots from './NavDots';

const Layout = (props) => {
	return (
		<View style={styles.layout}>
			<Toolbar subtitle={props.subtitle} title={props.title}/>
			<View style={styles.content}>
				{React.cloneElement(props.currentPage, {onSlideChange: props.onSlideChange})}
			</View>
			{props.slideCount > 1
				? <NavDots
					currentSlide={props.currentSlide}
					slideCount={props.slideCount}
				  />
				: null}
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
