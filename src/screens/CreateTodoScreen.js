import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';

import {COLORS} from '../constants/Colors';
import {Button} from '../components';
import {useAppContext} from '../context/AppContext';

const CreateTodoScreen = ({navigation}) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const {addTodo} = useAppContext();
  const date = new Date();

  const [inputs, setInputs] = useState({
    id: Math.random().toString(16).slice(2),
    todoTitle: '',
    todoNote: '',
    completed: false,
    createdAt: date.toISOString(),
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs(curNoteInputs => {
      return {
        ...curNoteInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const saveButtonHandler = () => {
    addTodo(inputs)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        placeholderTextColor="#555"
        style={styles.input}
        selectionColor={COLORS.secondary00}
        ref={titleInputRef}
        autoFocus={true}
        onChangeText={inputChangeHandler.bind(this, 'todoTitle')}
        // value={noteInputs.title}
      />
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
        // value={noteInputs.note}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          styleConfigs={styles.cancelButton}>
          Cancel
        </Button>
        <Button
          onPress={() => {saveButtonHandler()}}
          styleConfigs={styles.saveButton}>
          Save
        </Button>
      </View>
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
    backgroundColor: '#E71D36',
    borderRadius: 5,
  },
  saveButton: {
    flex: 1,
    height: 40,
    backgroundColor: COLORS.secondary11,
    borderRadius: 5,
  },
});
