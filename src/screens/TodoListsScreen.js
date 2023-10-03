import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS} from '../constants/Colors';
import {Button} from '../components';

const TodoListsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.createTodoButtonWrapper}>
        <Button
          onPress={() => {
            navigation.navigate('Create Todo');
          }}
          styleConfigs={styles.createTodoButton}
          icon={require('../assets/plus.png')}
        />
      </View>
    </View>
  );
};

export default TodoListsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary00,
  },
  createTodoButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  createTodoButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: COLORS.secondary00,
  },
});
