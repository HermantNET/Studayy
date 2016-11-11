import React from 'react';
import {connect} from 'react-redux';
import {loadPage, slideChanged} from '../../actions/actionCreators';
import Layout from '../dumb/Layout';

// pages
import Home from '../dumb/pages/Home';
import TaskManager from './TaskManager';
import Record from '../dumb/pages/Record';
import Goals from '../dumb/pages/Goals';

const getCurrentPage = (page) => {
	switch (page) {
		case 'Home':
			return <Home/>;
		case 'Tasks':
			return <TaskManager/>;
		case 'Record':
			return <Record/>;
		case 'Goals':
			return <Goals/>;
		default:
			return <Home/>;
	}
};

const getSlideCount = (page) => {
	switch (page) {
		case 'Home':
			return 2;
		default:
			return 1;
	}
};

const mapStateToProps = (state) => {
	return {
		// Passing current slide for use with NavDots component
		currentPage: getCurrentPage(state.navigation.page),
		// Get the number of child elements for views that use
		// ViewPagerAndroid
		slideCount: getSlideCount(state.navigation.page), // TODO make dynamic
		...state.navigation
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTabClick: (page, title, subtitle) => {
			dispatch(loadPage(page, title, subtitle));
		},
		onSlideChange: (index) => {
			dispatch(slideChanged(index));
		}
	};
};

const PageHandler = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default PageHandler;
