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
        <SubmitText>追加する</SubmitText>
      </Submit>
      </SubmitSection>
    </Section>
  );
}

const Section = styled(View)`
  flex: 1;
  justify-content: flex-start;
  background: #fff;
`

const Input = styled(TextInput)`
  height: 50px;
  width: 80%;
  padding: 10px;
  border: 3px solid #191970;
  margin: 15px;
  border-radius: 5px;
  font-size: 20px;
`

const Header = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  background-color: #A4C6FF;
  padding-top: 8px;
  padding-left: 20px;
  padding-bottom: 8px;
  text-align: left;
  height: 36px;
  line-height: 20px;
`
const Submit = styled(TouchableHighlight)`
  width: 100px;
  background: #1168cd;
  padding: 10px;
  border: 1px solid #191970;
  border-radius: 5px;
  margin-left: 15px;
`

const SubmitSection = styled(View)`
  flex-direction: row;
`
const SubmitText = styled(Text)`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`

export default AddTodo;