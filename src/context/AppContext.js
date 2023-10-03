import React, {useState, useEffect, useContext, createContext} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const getTodoData = async () => {
    const todo = await AsyncStorage.getItem('todo');
    if (todo !== null) {
      const parsedTodo = JSON.parse(todo);
      setTodos(parsedTodo);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  const addTodo = async todo => {
    try {
      const existingTodos = await AsyncStorage.getItem('todo');
      const parsedTodos = JSON.parse(existingTodos) || [];

      parsedTodos.push(todo);

      await AsyncStorage.setItem('todo', JSON.stringify(parsedTodos));
      setTodos(parsedTodos);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const editTodo = () => {
    // Implement the logic to edit a todo in AsyncStorage and update the state
  };

  const deleteTodo = async (id) => {
    try {
        const existingTodos = await AsyncStorage.getItem('todo');
        const parsedTodos = JSON.parse(existingTodos) || [];
        
        const updatedTodos = parsedTodos.filter((todo) => todo.id !== id);
    
        await AsyncStorage.setItem('todo', JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export {AppProvider};

export const useAppContext = () => useContext(AppContext);
