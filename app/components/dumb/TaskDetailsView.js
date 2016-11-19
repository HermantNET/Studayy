import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ms from '../../masterStyles';
import moment from 'moment';

const TaskDetailsView = (props) => {
  var task = props.task;
  return (
    <View>
      <Text style={ms.textSubTitle}>{task.name}</Text>

      <View style={ms.marginVertical}>
        <Text style={ms.textLabel}>Estimated Time: </Text>
        <View style={ms.containerSpace}>
          <Text>
            {task.estimatedTime[0] + (task.estimatedTime[0] === 1 ? " Day, " : " Days, ")}
            {task.estimatedTime[1] + (task.estimatedTime[1] === 1 ? " Hour, " : " Hours, ")}
            {task.estimatedTime[2] + (task.estimatedTime[2] === 1 ? " Minute" : " Minutes")}
          </Text>
        </View>
      </View>

      <View style={ms.marginVertical}>
        <Text style={ms.textLabel}>Actual Time: </Text>
        <View style={ms.containerSpace}>
          <Text>
            {task.estimatedTime[0] + (task.estimatedTime[0] === 1 ? " Day, " : " Days, ")}
            {task.estimatedTime[1] + (task.estimatedTime[1] === 1 ? " Hour, " : " Hours, ")}
            {task.estimatedTime[2] + (task.estimatedTime[2] === 1 ? " Minute" : " Minutes")}
          </Text>
        </View>
      </View>

      <View style={ms.marginVertical}>
        <Text style={ms.textLabel}>Finish By: </Text>
        <View style={ms.containerSpace}>
          <Text  style={styles.pill}>{new Date(...task.finishBy).toLocaleDateString()}</Text>
        </View>
      </View>

      <View style={ms.marginVertical}>
        <Text style={ms.textLabel}>{task.distribute ? "Days" : "Possible Day"} of Work:</Text>
        <View style={ms.containerSpace}>
          {task.days.length > 0
            ? task.days.map((day) => <Text key={day} style={styles.pill}>{
              moment().isoWeekday(day).format("dddd").toString()
            }</Text>)
            : null
          }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    width: 80,
    padding: 2,
    margin: 2,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'lightgrey'
  }
});


export default TaskDetailsView;
