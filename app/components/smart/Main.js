'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

// Components
import Layout from './Layout';
import Home from '../dumb/Home';

class Main extends Component {
	render() {
		return (
			<Layout>
      		<Home />
      </Layout>
		);
	}
}

const styles = StyleSheet.create({

});


export default Main;