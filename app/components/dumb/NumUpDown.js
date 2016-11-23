import React, {Component} from 'react';
import {ToastAndroid, View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

class NumUpDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.value ? this.props.value : 0,
      min: this.props.min || 0,
      max: this.props.max || 100
    };
  }
  onChange(num) {
    this.setState({
      number: this.checkNum(num)
    }, function () {
      this.props.onChange(num);
    });
  }
  checkNum(num) {
    let parsedNum = num === '' ? 0 : Number.isInteger ? num : parseInt(num);
    let result;
    if (isNaN(parsedNum)) {
      result = this.state.number;
    } else if (parsedNum < this.state.min) {
      result = this.state.min;
    } else if (parsedNum > this.state.max) {
      result = this.state.max;
    } else {
      result = parsedNum;
    }

    return result;
  }
  incrementNum() {
    this.onChange(this.state.number + 1);
  }
  decrementNum() {
    this.onChange(this.state.number - 1);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.decrementNum.bind(this)} style={styles.button}>
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
        <TouchableOpacity onPress={this.incrementNum.bind(this)} style={styles.button}>
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
