# Todo_List
React Native Mobile app for creating Todo List and show casing the progress to the task.

Screen Components:

1. TodoListsScreen: Displays a list of todos created by user and this screen have a button(plus) which navigates user to the CreateTodoScreen. Todo List have checkbox which indicates the completion status of task, Clicking to the Todo List navigates user to the details screen of the specified Todo, Todo List container have edit and delete buttons too.

![Screenshot_2023-10-04-13-30-33-93](https://github.com/PrabinKa/Todo_List/assets/83293836/73a79bb3-854e-45f0-b373-ff45f1b0f88e)

![Screenshot_2023-10-04-13-30-41-44](https://github.com/PrabinKa/Todo_List/assets/83293836/fc253326-fd3a-48fa-9c52-dbef54949d48)

2. CreateTodoScreen: Allow users to create todo by inputting todos title and some description about the todo task created. After clicking on save button user will get navigate back to TodoListsScreen. When user wants to edit the existing todo, By clicking on edit button of Todo List, user will be navigated to CreateTodoScreen and title and description of todo will get filled which the user is trying to edit and making the changes, user can click on update button to update the changes of Todo.

![Screenshot_2023-10-04-13-31-20-36](https://github.com/PrabinKa/Todo_List/assets/83293836/ad3b8675-a74a-4402-b67a-c217881ec13d)

![Screenshot_2023-10-04-13-30-48-96](https://github.com/PrabinKa/Todo_List/assets/83293836/9ddcfe5f-7d25-4150-8ddd-fe4b4effbdff)

3. TodoDetailsScreen: Displays all the details about the clicked todo list. Detail contains Todo Title, Todo Description, Date and Time when Todo was created and Completion status of todo.
   
![Screenshot_2023-10-04-13-31-09-25](https://github.com/PrabinKa/Todo_List/assets/83293836/ffa95213-c97c-4ad3-9aab-d66d580b3d60)


Data Flow:

1. Initialization: When App starts, useEffect hook in context component loads the Todo data from local storage and push it to the initial state, if data were previously saved. If data was not saved or the user install the app for first time then initial state will be an empty array.
   
2. View Todos (TodoListsScreen): The TodoListsScreen component receives the inital state data through context provider.Todo data is passed to the TodoItem component for rendering. Each TodoItem component within the TodoListsScreen represents an individual todo.
   
3. Creating New Todo / Editing existing Todo (CreateTodoScreen): Creating new todo and editing the todo are handled within a CreatedTodoScreen.
:~ When a user wants to create a new todo, they interact with the CreateTodoScreen. If the user wants to edit the Todo user will gets navigate to CreateTodoScreen by clicking on edit button of TodoList.
:~ The user inputs the todo title and description and clicks the "Save" button. If user click on edit, data of todo is passed as parameters to routes throught navigation. By checking the params data, button name is changed to "Update" if data is passed, if not then button name will be "Save". Following similar test, addTodo function and updateTodo function will be executed. Data is passed to todo title and description TextInput and user can make changes according to their need.
:~ The input data or edited data is sent to the addTodo or updateTodo function accordingly which is declared on AppContext Component.
:~ addTodo and updateTodo function updates todo data to initial state and stores the updated list of data to the local storage.
:~ The TodoListsScreen component re-renders with the updated list of todos, showing the newly added todo or reflecting the changes.

4. Delete Todo(TodoListsScreen): When a user wants to delete a todo, they interact with the TodoItem component.The user clicks a "Delete" button associated with the todo. A function(deleteTodo) to delete the todo is called, which removes the todo from the list of todos and updates local storage. The TodoListsScreen component re-renders without the deleted todo.

5. Todo Completion Status(TodoItem): When a user wants to update completion status of a todo, they interact with the CheckBox associated with TodoItem Component. Whenever user check/uncheck the checkbox, updateTodoCompletion function will be called declared on AppContext Component and the completed status gets changes accordingly.

6. View Todo Details(TodoDetailsScreen): When user clicks on Todo List, todo item data is passed as parameters to the route from TodoItem component. 

