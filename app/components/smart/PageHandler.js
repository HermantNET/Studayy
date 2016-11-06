import React from 'react';
import {connect} from 'react-redux';
import {loadPage} from '../../actions/actionCreators';
import Layout from '../dumb/Layout';

// pages
import Home from '../dumb/Home';

const getCurrentPage = (page) => {
	switch (page) {
		case 'Home':
			return <Home/>;
		default:
			return <Home/>;
	}
};

const mapStateToProps = (state) => {
	return {
		currentPage: getCurrentPage(state.page),
		...state.navigation
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTabClick: (page, title, subtitle) => {
			dispatch(loadPage(page, title, subtitle));
		}
	};
};

const PageHandler = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default PageHandler;
