import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TodoListsScreen from '../screens/TodoListsScreen';
import CreateTodoScreen from '../screens/CreateTodoScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import {COLORS} from '../constants/Colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const date = new Date();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: COLORS.secondary22,
          headerStyle: {backgroundColor: COLORS.secondary00},
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen
          name="Todo List"
          component={TodoListsScreen}
          options={{
            headerRight: ({}) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: COLORS.primary00,
                }}>
                {date.toLocaleDateString()}
              </Text>
            ),
          }}
        />
        <Stack.Screen name="Create Todo" component={CreateTodoScreen} />
        <Stack.Screen name="Todo Details" component={TodoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
