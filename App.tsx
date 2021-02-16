import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AddTodo } from './src/app/components/AddTodo';
import { TodoList } from './src/app/components/TodoList';
import { AntDesign, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const AddTodoIcon: React.FC<{color: string, size: number }> = ({ color, size }) => (
  <AntDesign name="pluscircleo" size={size} color={color} />
)

const TodoListIcon: React.FC<{color: string, size: number }> = ({ color, size }) => (
  <Feather name="list" color={color} size={size} />
)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="タスクを作成"
        component={AddTodo}
        options={{
          tabBarIcon: AddTodoIcon
        }}/>
        <Tab.Screen
        name="タスクを表示"
        component={TodoList}
        options={{
          tabBarIcon: TodoListIcon
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
