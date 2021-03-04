import * as React from 'react'
import { View, Text, SectionList, Dimensions, TouchableHighlight } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import axios from 'axios';

type Sections = null | {
  title: string
  data: Array<Task>
}[]

type Task = {
  id: string
  title: string
  status: "todo" | "doing" | "done"
}

const TodoList: React.FC = () => {
  const navigation = useNavigation()
  const [data, setData] = useState<null | Sections>(null)

  useFocusEffect(
    useCallback(() => {
      axios.get<Task[]>('http://localhost:3000/todo')
      .then(res => {
        const precessedData: Sections = [
          {
            title: 'todo',
            data: []
          },
          {
            title: 'doing',
            data: []
          },
          {
            title: 'done',
            data: []
          }
        ]
        for ( const task of res.data) {
          if(task.status === "todo") {
            precessedData[0].data.push(task)
          }
          if(task.status === "doing") {
            precessedData[1].data.push(task)
          }
          if(task.status === "done") {
            precessedData[2].data.push(task)
          }
        }
        setData(precessedData)
      })
    },[])
  )
  if(!data) return null
  return (
    <Section>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemWrapper onPress={() => navigation.navigate("タスク編集", { id: item.id })} underlayColor="#aaf">
            <ItemText>
            {item.title}
            </ItemText>
          </ItemWrapper>
        )}
        renderSectionHeader={({ section: { title }}) => (
          <SectionHeaderWrapper>
        <SectionHeaderText>{title}</SectionHeaderText>
      </SectionHeaderWrapper>
        )}
      />
      <Text>この画面で Task を見られるようにする予定</Text>
    </Section>
  );
}

const Section = styled(View)`
  background: white;
  height: ${Dimensions.get('window').height};
`

const SectionHeaderWrapper =styled(View)`
  background: #eee;
  width: ${Dimensions.get('window').width};
  height: 30px;
  justify-content: center;
`

const SectionHeaderText =styled(Text)`
  font-weight: bold;
  margin-left: 15px;
`

const ItemWrapper = styled(TouchableHighlight)`
  height: 40px;
  justify-content: center;
`

const ItemText =styled(Text)`
  font-weight: bold;
  margin-left: 15px;
`

export default TodoList