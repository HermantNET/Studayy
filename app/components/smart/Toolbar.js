'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ToolbarAndroid
} from 'react-native';

class Toolbar extends Component {
  render() {
    return (
      <ToolbarAndroid
      	logo={this.props.logo}
      	title={this.props.title}
      	subtitle={this.props.subtitle}
      	actions={[{title: 'Options', show: 'always', showWithText: true}]}
      	style={styles.Toolbar} />
    );
  }
}

const styles = StyleSheet.create({
	Toolbar: {
		height: 56
	}
});


export default Toolbar;