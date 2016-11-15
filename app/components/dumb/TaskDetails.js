import React from 'react';
import { View, Text, StyleSheet, Modal} from 'react-native';
import ms from '../../masterStyles';

const TaskDetails = (props) => {
  var task = props.task === null ? {
    name: "Unavailable",
    estimatedTime: [0, 0, 0],
    actualTime: [0, 0, 0],
    finishBy: [2016, 0, 0],
    days: [0, 0],
    distribute: false
  }
  : props.task;
  return (
	<Modal
		animationType="slide"
		onRequestClose={() => {
        props.toggleShowTaskDetails();
      }}
		transparent
		visible={props.showTaskDetails}
	>
		<View style={[ms.pageCenter, {padding: 20, margin: 20, backgroundColor: 'white', elevation: 25}]}>
			<Text style={ms.textTitle}>{props.subjectName}</Text>
			<Text style={ms.textSubTitle}>{task.name}</Text>

			<View style={ms.marginVertical}>
				<Text style={ms.textLabel}>Estimated Time: </Text>
				<View style={ms.containerSpace}>
					<Text>{task.estimatedTime[0]} Days, </Text>
					<Text>{task.estimatedTime[1]} Hours, </Text>
					<Text>{task.estimatedTime[2]} Minutes </Text>
				</View>
			</View>

			<View style={ms.marginVertical}>
				<Text style={ms.textLabel}>Actual Time: </Text>
				<View style={ms.containerSpace}>
					<Text>{task.actualTime[0]} Days, </Text>
					<Text>{task.actualTime[1]} Hours, </Text>
					<Text>{task.actualTime[2]} Minutes </Text>
				</View>
			</View>

			<View style={ms.marginVertical}>
				<Text style={ms.textLabel}>Finish By Date: </Text>
				<View style={ms.containerSpace}>
					<Text  style={styles.pill}>{new Date(...task.finishBy).toLocaleDateString()}</Text>
				</View>
			</View>

			<View style={ms.marginVertical}>
				<Text style={ms.textLabel}>{task.distribute ? "Days" : "Possible Day"} of Work:</Text>
				<View style={ms.containerSpace}>
					{task.days.map((day) => <Text key={day} style={styles.pill}>{[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ][day]}</Text>)}
				</View>
			</View>
		</View>
	</Modal>
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

export default TaskDetails;
