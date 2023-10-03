import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log("todo", todo)
  };

  const editTodo = () => {
    // Implement the logic to edit a todo in AsyncStorage and update the state
  };

  const deleteTodo = () => {
    // Implement the logic to delete a todo from AsyncStorage and update the state
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export const useAppContext = () => useContext(AppContext);