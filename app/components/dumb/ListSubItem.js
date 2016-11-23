import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import ms from '../../masterStyles';

const ListSubItem = (props) => {
	return (
  <TouchableHighlight
    onPress={() => {
			props.setSelectedTask(props.subjectIndex, props.taskIndex, props.item);
			props.toggleShowTaskDetails();
		}}
    style={ms.listSubItemContainer}
    underlayColor="#CCBB00"
		>
    <Text
      ellipsizeMode="tail"
      numberOfLines={1}
      style={ms.listSubItem}
    >
      {props.item.name}
    </Text>
  </TouchableHighlight>
	);
};

export default ListSubItem;
