import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import ms from '../../masterStyles';
import NumUpDown from './NumUpDown';


class TaskDetailsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {...this.props.task}
    };
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
            <NumUpDown value={task.estimatedTime[0]} /><Text> Days   </Text>
          </View>
          <View style={ms.containerSpace}>
            <NumUpDown value={task.estimatedTime[1]} /><Text> Hours  </Text>
          </View>
          <View style={ms.containerSpace}>
            <NumUpDown value={task.estimatedTime[2]} /><Text> Minutes</Text>
          </View>
        </View>

        <View style={ms.marginVertical}>
          <Text style={ms.textLabel}>Actual Time: </Text>
          <View style={ms.containerSpace}>
            <Text>
              {task.actualTime[0] + (task.estimatedTime[0] === 1 ? " Day, " : " Days, ")}
              {task.actualTime[1] + (task.actualTime[1] === 1 ? " Hour, " : " Hours, ")}
              {task.actualTime[2] + (task.actualTime[2] === 1 ? " Minute" : " Minutes")}
            </Text>
          </View>
        </View>

        <View style={ms.marginVertical}>
          <Text style={ms.textLabel}>Finish By: </Text>
          <View style={ms.containerSpace}>
            <Text>{new Date(...task.finishBy).toLocaleDateString()}</Text>
          </View>
        </View>

        <View style={ms.marginVertical}>
          <Text style={ms.textLabel}>{task.distribute ? "Days" : "Possible Day"} of Work:</Text>
          <View style={ms.containerSpace} />
        </View>
      </View>
    );
  }
}


export default TaskDetailsEdit;
