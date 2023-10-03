import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TodoListsScreen from '../screens/TodoListsScreen';
import CreateTodoScreen from '../screens/CreateTodoScreen';
import {COLORS} from '../constants/Colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: COLORS.secondary22,
          headerStyle: {backgroundColor: COLORS.secondary00},
          animation: "fade_from_bottom"
        }}>
        <Stack.Screen name="Todo List" component={TodoListsScreen} />
        <Stack.Screen name="Create Todo" component={CreateTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
