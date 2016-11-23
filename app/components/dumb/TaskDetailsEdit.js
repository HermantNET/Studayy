import React, {Component} from 'react';
import {View, Text, TextInput, DatePickerAndroid, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import ms from '../../masterStyles';
import NumUpDown from './NumUpDown';
import moment from 'moment';


class TaskDetailsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {...this.props.task}
    };
  }
  showPicker = async (stateKey, options) => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          task: Object.assign({}, this.state.task, {
              finishBy: [year, month, day]
            })
        });
      }
    } catch ({code, message}) {
      console.warn(`Error with DatePickerAndroid '${stateKey}'`, message);
    }
  }
  render() {
    var task = this.state.task;
    return (
      <View>
        <TextInput
          multiline
          onChangeText={(text) => {this.setState({
            task: Object.assign({}, task, {
              name: text
            })
          });}}
          placeholder="Task Name"
          style={ms.textSubTitle}
          value={task.name}
        />

        <View style={ms.marginVertical}>
          <Text style={ms.textLabel}>Estimated Time: </Text>
          <View style={ms.containerSpace}>
            <NumUpDown onChange={(num) => this.setState({
                task: Object.assign({}, task, {
                    estimatedTime: [num, this.state.task.estimatedTime[1], this.state.task.estimatedTime[2]]
                  })
              })}
              value={task.estimatedTime[0]}
            />
            <Text style={ms.textFixedWidth}> Days</Text>
          </View>
          <View style={ms.containerSpace}>
            <NumUpDown value={task.estimatedTime[1]} /><Text style={ms.textFixedWidth}> Hours</Text>
          </View>
          <View style={ms.containerSpace}>
            <NumUpDown value={task.estimatedTime[2]} /><Text style={ms.textFixedWidth}> Minutes</Text>
          </View>
        </View>

        <View style={ms.marginVertical}>
          <Text style={ms.textLabel}>Actual Time: </Text>
          <View style={ms.containerSpace}>
            <NumUpDown value={task.actualTime[0]} /><Text style={ms.textFixedWidth}> Days</Text>
          </View>
          <View style={ms.containerSpace}>
            <NumUpDown value={task.actualTime[1]} /><Text style={ms.textFixedWidth}> Hours</Text>
          </View>
          <View style={ms.containerSpace}>
            <NumUpDown value={task.actualTime[2]} /><Text style={ms.textFixedWidth}> Minutes</Text>
          </View>
        </View>

        <View style={ms.marginVertical}>
          <Text style={ms.textLabel}>Finish By: </Text>
          <View style={ms.containerSpace}>
            <TouchableWithoutFeedback onPress={this.showPicker.bind(this, 'simple', {date: new Date(...task.finishBy)})}>
              <View>
                <Text style={ms.pill}>{new Date(...task.finishBy).toLocaleDateString()}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={ms.marginVertical}>
          <Text style={ms.textLabel}>{task.distribute ? "Days" : "Possible Day"} of Work:</Text>
          <View style={ms.containerSpace}>
            {
              [1,2,3,4,5,6,7].map((day) => {
                var some = this.state.task.days.some((d) => d === day);
                return (
                  <Text
                    key={day}
                    onPress={() => {
                      this.setState({
                        task: Object.assign({}, task, {
                                                        days: !some
                                                          ? this.state.task.days.concat(day)
                                                          : this.state.task.days.filter((d) => day !== d)
                                                      })
                      });
                    }}
                    style={[
                            ms.pill,
                            some
                              ? ms.pillActive
                              : ms.pillInactive
                          ]}
                  >
                    {moment().isoWeekday(day).format("dddd").toString()}
                  </Text>
                );
              })
            }
          </View>
        </View>
        <TouchableHighlight onPress={this.props.toggleEdit}>
          <View>
            <Text>Cancel</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.saveChanges.bind(null, task)}>
          <View>
            <Text>Save</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


export default TaskDetailsEdit;
