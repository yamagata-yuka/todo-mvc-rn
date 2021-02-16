import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AddTodo } from './src/app/components/AddTodo';
import { TodoList } from './src/app/components/TodoList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={AddTodo} />
        <Tab.Screen name="Settings" component={TodoList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
