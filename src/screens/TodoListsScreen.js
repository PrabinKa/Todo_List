import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState, useCallback} from 'react';

import {COLORS} from '../constants/Colors';
import {Button, TodoItem, AlertModal} from '../components';
import {useAppContext} from '../context/AppContext';

const TodoListsScreen = ({navigation}) => {
  const {todos, deleteTodo} = useAppContext();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [buttonClickedType, setButtonClickedType] = useState('');
  const [todoItem, setTodoItem] = useState();

  // Handle the todo operations(edit and delete) based on the button clicked
  const handleTodoOperation = () => {
    if (buttonClickedType == 'delete') {
      deleteTodo(todoItem.id);
      setIsAlertVisible(false);
    } else {
      setIsAlertVisible(false);
      navigation.navigate('Create Todo', {todoItem});
    }
  };

  // Hide the alert modal
  const hideAlertModal = () => {
    setIsAlertVisible(false);
  };

  // Handle the button click by setting the button type and todo item
  const handleClickedButtonType = useCallback((type, item) => {
    setButtonClickedType(type);
    setTodoItem(item);
    setIsAlertVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      {todos.length == 0 ? (
        <View style={styles.noTodosMessage}>
          <Text style={styles.noTodosText}>No todo Added</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20}}
          renderItem={({item}) => {
            return (
              <TodoItem
                item={item}
                colors={COLORS}
                navigation={navigation}
                onTodoButtonClicked={(type, item) =>
                  handleClickedButtonType(type, item)
                }
              />
            );
          }}
        />
      )}
      {/* Create a button to add a new todo */}
      <View style={styles.createTodoButtonWrapper}>
        <Button
          onPress={() => {
            navigation.navigate('Create Todo', {todoItem: null});
          }}
          styleConfigs={styles.createTodoButton}
          icon={require('../assets/plus.png')}
        />
      </View>
      {/* Display the AlertModal for todo operations */}
      <AlertModal
        message={buttonClickedType}
        onClose={hideAlertModal}
        isVisible={isAlertVisible}
        onPress={() => handleTodoOperation()}
      />
    </View>
  );
};

export default TodoListsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary00,
  },
  noTodosMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTodosText: {
    color: COLORS.secondary11,
  },
  createTodoButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  createTodoButton: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: COLORS.secondary11,
    borderWidth: 2,
    borderColor: COLORS.secondary00,
  },
});
