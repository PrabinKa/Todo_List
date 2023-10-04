import {View, TextInput, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';

import {COLORS} from '../constants/Colors';
import {Button, ErrorModal} from '../components';
import {useAppContext} from '../context/AppContext';

const CreateTodoScreen = ({navigation, route}) => {
  // Refs for title and description text inputs
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  // Access the application context for adding and editing todos
  const {addTodo, editTodo} = useAppContext();

  // State to manage error message visibility and content
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Extract the 'todoItem' from the route params foe edit operation
  const {todoItem} = route.params;

  const date = new Date();

  // Initialize 'inputs' state with todo data or defaults
  const [inputs, setInputs] = useState({
    id: todoItem?.id || Math.random().toString(16).slice(2),
    todoTitle: todoItem?.todoTitle || '',
    todoNote: todoItem?.todoNote || '',
    completed: todoItem?.completed || false,
    createdAt: todoItem?.createdAt || date.toISOString(),
  });

  // Handler for input changes
  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs(curNoteInputs => {
      return {
        ...curNoteInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  // Function to validate and handle the save or update operation
  const validateAndHandle = () => {
    const {todoTitle, todoNote} = inputs;
    if (todoTitle.trim() === '' || todoNote.trim() === '') {
      setIsErrorVisible(true);
      setErrorMessage('Every field must be filled!');
    } else {
      todoItem ? updateTodo() : saveTodo();
    }
  };

  // Handler for save button click
  const saveTodo = () => {
    addTodo(inputs);
    navigation.goBack();
  };

  // Handler for update button click
  const updateTodo = () => {
    editTodo(inputs);
    navigation.goBack();
  };

  // Handler to hide the error modal
  const hideErrorModal = () => {
    setIsErrorVisible(false);
  };

  // Determine the button label based on whether it's an edit or save operation
  const buttonLabel = todoItem ? 'Update' : 'Save';

  return (
    <View style={styles.container}>
      {/* Title input */}
      <TextInput
        placeholder="Title"
        placeholderTextColor="#555"
        style={styles.input}
        selectionColor={COLORS.secondary00}
        ref={titleInputRef}
        autoFocus={true}
        onChangeText={inputChangeHandler.bind(this, 'todoTitle')}
        value={inputs.todoTitle}
      />
      {/* Description input */}
      <TextInput
        placeholder="Describe how will you perform this task.."
        autoCapitalize="sentences"
        autoCorrect={true}
        selectionColor={COLORS.secondary00}
        placeholderTextColor="#555"
        multiline={true}
        scrollEnabled={true}
        style={styles.noteInput}
        ref={descriptionInputRef}
        onChangeText={inputChangeHandler.bind(this, 'todoNote')}
        value={inputs.todoNote}
      />
      <View style={styles.buttonContainer}>
        {/* Cancel button */}
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          styleConfigs={styles.cancelButton}>
          Cancel
        </Button>
        {/* Save or Update button */}
        <Button onPress={validateAndHandle} styleConfigs={styles.saveButton}>
          {buttonLabel}
        </Button>
      </View>
      {/* Error modal for validation errors */}
      <ErrorModal
        isVisible={isErrorVisible}
        message={errorMessage}
        onClose={hideErrorModal}
      />
    </View>
  );
};

export default CreateTodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary00,
    padding: 20,
  },
  input: {
    height: 50,
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.secondary11,
    borderColor: COLORS.secondary11,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  noteInput: {
    color: COLORS.secondary11,
    fontSize: 16,
    minHeight: 150,
    overflow: 'hidden',
    borderColor: COLORS.secondary11,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    height: 40,
    marginRight: 10,
    backgroundColor: COLORS.red,
    borderRadius: 5,
  },
  saveButton: {
    flex: 1,
    height: 40,
    backgroundColor: COLORS.secondary11,
    borderRadius: 5,
  },
});
