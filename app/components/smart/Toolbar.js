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
      	subtitle={this.props.subtitle} />
    );
  }
}

const styles = StyleSheet.create({

});


export default Toolbar;