import React from 'react';
import { View, Text, TouchableHighlight} from 'react-native';
import ms from '../../masterStyles';

const ListItem = (props) => {
  return (
	<TouchableHighlight
		onPress={() => {
      props.expandSubject(props.index);
    }}
		style={ms.listItemContainer}
		underlayColor="#CCBB00"
	>
		<View>
			<Text
				ellipsizeMode="tail"
				numberOfLines={1}
				style={ms.listItem}
			>
				{props.item.name}
			</Text>
		</View>
	</TouchableHighlight>
  );
};

export default ListItem;
