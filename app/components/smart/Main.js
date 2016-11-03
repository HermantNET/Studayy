'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

// Components
import Home from '../dumb/Home.js';

class Main extends Component {
  render() {
    return (
      <View>
      	<Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default Main;