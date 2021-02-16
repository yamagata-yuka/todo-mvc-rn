import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { AddTodo } from './src/app/components/AddTodo';
import { TodoList } from './src/app/components/TodoList';
import { AntDesign, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const AddTodoStack = createStackNavigator();
const TodoListStack = createStackNavigator();

// 画面を追加するならこのreturnの中に書く
// 画面間の遷移で移動したりできるようになる
const AddTodoStackComponent = () => {
  return (
    <AddTodoStack.Navigator>
      <AddTodoStack.Screen
      name="タスクの追加"
      component={AddTodo}
      />
    </AddTodoStack.Navigator>
  )
}

const TodoListStackComponent = () => {
  return (
    <TodoListStack.Navigator>
      <TodoListStack.Screen
      name="タスク一覧"
      component={TodoList}
      />
    </TodoListStack.Navigator>
  )
}

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
        name="AddTodo"
        component={AddTodoStackComponent}
        options={{
          tabBarIcon: AddTodoIcon
        }}/>
        <Tab.Screen
        name="TodoList"
        component={TodoListStackComponent}
        options={{
          tabBarIcon: TodoListIcon
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
