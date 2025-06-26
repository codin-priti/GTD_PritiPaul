import React, { useContext, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, List, TextInput } from 'react-native-paper';
import { TaskContext } from '../context/TaskContext';
// Define the type for a task item
type InboxScreenProps = {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
};
// Define the type for the task item
export default function InboxScreen({ navigation }: InboxScreenProps) {
  const [input, setInput] = useState('');
  const context = useContext(TaskContext);
// Check if context is available
  if (!context) {
    return null;
  }
// Destructure the inbox and setInbox from the context
  const { inbox, setInbox } = context;
// Function to add a new item to the inbox
  // Ensure the input is not empty before adding
  const addItem = () => {
    if (input.trim()) {
      setInbox([...inbox, {
        id: Date.now().toString(), title: input,
        context: ''
      }]);
      setInput('');
    }
  };
// Render the inbox screen with a text input and a button to add items
  // Also render the list of items in the inbox
  return (
    <View style={{ padding: 16 }}>
      <TextInput label="New Task" value={input} onChangeText={setInput} mode="outlined" />
      <Button
        onPress={addItem}
        style={{ marginTop: 10, backgroundColor: 'black' }}
        mode="contained"
      >
        Add to Inbox
      </Button>
      <FlatList
        data={inbox}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            onPress={() => navigation.navigate('Process', { item })}
          />
        )}
      />
    </View>
  );
}