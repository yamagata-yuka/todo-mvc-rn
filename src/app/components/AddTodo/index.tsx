import * as React from 'react'
import { View, Text } from 'react-native';

export const AddTodo: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>この画面で Task を作成できるようにする予定</Text>
    </View>
  );
}