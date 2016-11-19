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
      edit: false
    };
  }
  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
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
        <ScrollView contentContainerStyle={[ms.pageCenter, {minHeight: 400, padding: 20, backgroundColor: 'white'}]}>
          <Text style={ms.textTitle}>{this.props.subjectName}</Text>
          {this.state.edit
                ? <TaskDetailsEdit task={task} />
                : <TaskDetailsView task={task} />
          }
        </ScrollView>
        <View style={{padding: 20, margin: 20, marginTop: 0, backgroundColor: 'white', elevation: 25}}>
          <TouchableHighlight onPress={this.toggleEdit.bind(this)}>
            <Text>Edit</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}


export default TaskDetails;
