import { useState } from "react"
import * as React from 'react'
import axios from "axios"
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import Snackbar from "../Snackbar";

// container
const AddTodo = () => {
  // useStateを使って状態を作る
  const [todoTitle, changeTodoTitle] = useState('')
  const [created, changeCreated] = useState(false)
  const onSubmit = async () => {
    if (todoTitle.trim() === "") {
      return
    }
    const payload = {
      title: todoTitle,
      status: "todo"
    }
    try {
      await axios
        .post('http://localhost:3000/todo',payload)
        changeTodoTitle('')
        changeCreated(true)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <AddTodoPresentation
      todoTitle={todoTitle}
      onChangeTodoTitle={changeTodoTitle}
      onSubmit={onSubmit}
      created={created}
    />
  )
}

type Props = {
  todoTitle: string
  onSubmit: () => unknown
  onChangeTodoTitle: (text: string) => unknown
  created: boolean
}

const AddTodoPresentation: React.FC<Props> = ({
  todoTitle,
  onSubmit,
  onChangeTodoTitle,
  created
}) => {
  return (
    <Section>
      {created && <Snackbar message="タスクを作成しました" />}
      <Header>タスク名を入力</Header>
      <Input
       value={todoTitle}
       onChangeText={onChangeTodoTitle}
      />
      <SubmitSection>
      <Submit onPress={onSubmit}>
        <Text>追加する</Text>
      </Submit>
      </SubmitSection>
    </Section>
  );
}

const Section = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`

const Input = styled(TextInput)`
  height: 40px;
  width: 200px;
  margin-top: 10px;
  padding: 10px 70px;
  border: 2px solid #000;
`

const Header = styled(Text)`
  font-weight: bold;
  margin: 10px;
`
const Submit = styled(TouchableHighlight)`
  width: 100px;
  margin-top: 10px;
  background: #f4d;
  font-size: 25px;
`

const SubmitSection = styled(View)`
  background: #ff0;
  flex-direction: row;
`

export default AddTodo;