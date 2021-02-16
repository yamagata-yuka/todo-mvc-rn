import { useState } from "react"
import * as React from 'react'
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

// container
const AddTodo = () => {
  const [todoTitle, changeTodoTitle] = useState('')
  return (
    <AddTodoPresentation
      todoTitle={todoTitle}
      onChangeTodoTitle={changeTodoTitle}
    />
  )
}

type Props = {
  todoTitle: string
  // onSubmit: () => unknown
  onChangeTodoTitle: (text: string) => unknown
}

const AddTodoPresentation: React.FC<Props> = ({
  todoTitle,
  // onSubmit,
  onChangeTodoTitle
}) => {
  return (
    <Section>
      <Header>タスク名を入力</Header>
      <Input
       value={todoTitle}
       onChangeText={onChangeTodoTitle}
      />
      <SubmitSection>
      <Submit>
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
  background: #f00;
  font-size: 25px;
`

const SubmitSection = styled(View)`
  background: #ff0;
  flex-direction: row;
`

export default AddTodo;