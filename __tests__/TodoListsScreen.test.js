import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TodoListsScreen from '../src/screens/TodoListsScreen';

describe('TodoListsScreen', () => {
  it('renders a message when no todos are available', () => {
    const {getByText} = render(<TodoListsScreen />);
    const noTodosMessage = getByText('No todo Added');
    expect(noTodosMessage).toBeTruthy();
  });

  it('renders a list of todos when todos are available', () => {
    const todos = [
      {id: '1', todoTitle: 'Todo 1'},
      {id: '2', todoTitle: 'Todo 2'},
    ];
    const {getByText} = render(<TodoListsScreen />);
    const todo1 = getByText('Todo 1');
    const todo2 = getByText('Todo 2');
    //   const description1 = getByText('Description1');
    //   const description2 = getByText('Description2');
    expect(todo1).toBeTruthy();
    expect(todo2).toBeTruthy();
    //   expect(description1).toBeTruthy();
    //   expect(description2).toBeTruthy();
  });
});
