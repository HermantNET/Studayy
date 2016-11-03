'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

// Components
import NavMenu from './NavMenu';

class Layout extends Component {
	render() {
		return (
			<View>
				<NavMenu />

			</View>
		);
	}
}

const styles = StyleSheet.create({

});


export default Layout;