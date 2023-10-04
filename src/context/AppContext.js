import React, {useState, useEffect, useContext, createContext} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, setData} from '../components/AsyncStorageUtil';

// Create a context for the app's state
const AppContext = createContext();

// Define a provider component that will manage the app's state
const AppProvider = ({children}) => {
  // Initialize state for todos
  const [todos, setTodos] = useState([]);

  const getTodoData = async () => {
    const todo = await AsyncStorage.getItem('todo');
    if (todo !== null) {
      const parsedTodo = JSON.parse(todo);
      // Update the todos state with the parsed data
      setTodos(parsedTodo);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  // Function to add a new todo
  const addTodo = async todo => {
    try {
      const parsedTodos = await getData('todo');

      parsedTodos.push(todo);

      await setData('todo', parsedTodos);
      setTodos(parsedTodos);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Function to edit an existing todo
  const editTodo = async updatedTodo => {
    try {
      const parsedTodos = await getData('todo');
      // Update the specific todo in the list
      const updatedTodos = parsedTodos.map(todo => {
        if (todo.id === updatedTodo.id) {
          return {
            ...todo,
            todoTitle: updatedTodo.todoTitle,
            todoNote: updatedTodo.todoNote,
          };
        }
        return todo;
      });
      await setData('todo', updatedTodos);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  // Function to delete a todo
  const deleteTodo = async id => {
    try {
      const parsedTodos = await getData('todo');

      // Filter out the todo with the specified id
      const updatedTodos = parsedTodos.filter(todo => todo.id !== id);

      await setData('todo', updatedTodos);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Function to toggle the completion status of a todo
  const updateTodoCompletion = async updatedTodo => {
    try {
      const parsedTodos = await getData('todo');
      // Toggle the completion status of the specified todo
      const updatedTodos = parsedTodos.map(todo => {
        if (todo.id === updatedTodo.id) {
          return {
            ...todo,
            completed: !updatedTodo.completed,
          };
        }
        return todo;
      });
      await setData('todo', updatedTodos);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
        updateTodoCompletion,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export {AppProvider};

// Exporting a custom hook for using the context
export const useAppContext = () => useContext(AppContext);
