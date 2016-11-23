import React, {Component} from 'react';
import {ScrollView, View, Text, Modal, TouchableHighlight} from 'react-native';
import ms from '../../masterStyles';

// Components
import TaskDetailsEdit from './TaskDetailsEdit';
import TaskDetailsView from './TaskDetailsView';

class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      task: this.props.task
    };
  }
  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }
  saveChanges(task) {
    this.props.saveChanges(this.props.subjectIndex, this.props.taskIndex, task);
  }
  render() {
    var task = this.props.task === null ? {
      name: "",
      estimatedTime: [0, 0, 0],
      actualTime: [0, 0, 0],
      finishBy: [1, 0, 0],
      days: [],
      distribute: false
    }
    : this.props.task;
    return (
      <Modal
        animationType="fade"
        onRequestClose={() => {
              this.props.toggleShowTaskDetails();
            }}
        visible={this.props.showTaskDetails}
      >
        <ScrollView contentContainerStyle={{minHeight: 400, padding: 20}}>
          <Text style={ms.textTitle}>{this.props.subjectName}</Text>
          {this.state.edit
                ? <TaskDetailsEdit
                  saveChanges={this.saveChanges.bind(this)}
                  task={task}
                  toggleEdit={this.toggleEdit.bind(this)}
                  />
                : <TaskDetailsView task={task} toggleEdit={this.toggleEdit.bind(this)} />
          }
        </ScrollView>
      </Modal>
    );
  }
}


export default TaskDetails;
