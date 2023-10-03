import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import CheckBox from './CheckBox';
import Button from './Button';

const TodoItem = ({item, colors, navigation, onTodoButtonClicked}) => {
  const {id, todoTitle, todoNote, completed, createdAt} = item;

  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  const handleButtonClick = (type, item) => {
    onTodoButtonClicked(type, item)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, {backgroundColor: colors.secondary11}]}>
      <CheckBox
        onPress={() => {
          toggleCheck();
        }}
        checked={checked}
      />
      <Text style={[styles.title, {color: colors.primary00}]}>{todoTitle}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button
          styleConfigs={{
            height: 40,
            width: 40,
            backgroundColor: colors.secondary00,
            borderRadius: 5,
            marginRight: 10,
          }}
          icon={require('../assets/edit.png')}
          onPress={() => {handleButtonClick("edit", item)}}
        />
        <Button
          styleConfigs={{
            height: 40,
            width: 40,
            backgroundColor: colors.red,
            borderRadius: 5,
          }}
          icon={require('../assets/trash.png')}
          onPress={() => {handleButtonClick("delete", item)}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
});
