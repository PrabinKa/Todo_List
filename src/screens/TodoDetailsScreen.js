import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS} from '../constants/Colors';

const TodoDetailsScreen = ({route}) => {
  const {item} = route.params;
  const {id, todoTitle, todoNote, completed, createdAt} = item;

  const date = new Date(createdAt);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary00, padding: 20}}>
      <Text style={styles.title}>Todo Title:</Text>
      <Text style={styles.detail}>{todoTitle}</Text>

      <Text style={styles.title}>Created Time:</Text>
      <Text
        style={
          styles.detail
        }>{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</Text>

      <Text style={styles.title}>Completion Status:</Text>
      <Text style={styles.detail}>
        {completed ? 'Completed' : 'Not Completed'}
      </Text>

      <Text style={styles.title}>Todo Note:</Text>
      <Text style={styles.detail}>{todoNote}</Text>
    </View>
  );
};

export default TodoDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.primary00,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.secondary11,
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: COLORS.secondary00,
    marginBottom: 15,
  },
});
