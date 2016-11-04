'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

// Components
import Toolbar from './Toolbar';
import Footer from '../dumb/Footer';

class Layout extends Component {
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'space-between'}}>
				<Toolbar title="Studyy" subtitle="Home" />
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					{this.props.children}
				</View>
				<Footer items={['Home', 'Today', 'Tasks', 'Goals']} />
			</View>
		);
	}
}

const styles = StyleSheet.create({

});


export default Layout;