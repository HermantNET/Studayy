import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

class NumUpDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.value ? this.props.value : 0
    };
  }
  onChange(num) {
    let parsedNum = num === '' ? 0 : parseInt(num);
    this.setState({
      number: isNaN(parsedNum) || parsedNum < 0 ? this.state.number : parsedNum
    }, function () {
      if (typeof this.props.onChange === "function") {
        this.props.onChange(this.state.number);
      }
    });
  }
  incrementNum() {

  }
  decrementNum() {

  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
        <TextInput
          keyboardType="numeric"
          onChangeText={(num) => {
            this.onChange.call(this, num);
          }}
          style={styles.input}
          value={this.state.number.toString()}
        />
        <TouchableOpacity style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 100
  },
  input: {
    textAlign: 'center',
    flex: 2
  },
  button: {
    borderRadius: 5,
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NumUpDown;
