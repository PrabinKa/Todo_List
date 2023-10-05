import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';

import CheckBox from './CheckBox';
import Button from './Button';
import {useAppContext} from '../context/AppContext';

const TodoItem = ({item, colors, navigation, onTodoButtonClicked}) => {
  const {id, todoTitle, todoNote, completed, createdAt} = item;
  const {updateTodoCompletion} = useAppContext();
  const date = new Date(createdAt);

  const toggleCheck = () => {
    updateTodoCompletion(item);
  };

  const handleButtonClick = type => {
    onTodoButtonClicked(type, item);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('Todo Details', {item});
      }}
      style={[styles.container, {backgroundColor: colors.secondary11}]}>
      <Text
        style={{
          color: colors.primary00,
          fontSize: 12,
          fontWeight: 'bold',
        }}>{`${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox onPress={toggleCheck} checked={completed} />
        <Text
          numberOfLines={2}
          style={[styles.title, {color: colors.primary00}]}>
          {todoTitle}
        </Text>
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
            onPress={() => handleButtonClick('edit')}
          />
          <Button
            styleConfigs={{
              height: 40,
              width: 40,
              backgroundColor: colors.red,
              borderRadius: 5,
            }}
            icon={require('../assets/trash.png')}
            onPress={() => handleButtonClick('delete')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(TodoItem);

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    overflow: 'hidden'
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
});
