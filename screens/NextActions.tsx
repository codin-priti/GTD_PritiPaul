import { TaskContext } from '@/context/TaskContext';
import React, { useContext, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Chip, List } from 'react-native-paper';
// Define the type for the next action item

type NextAction = {
  id: string;
  title: string;
  context?: string;
};
// Define the type for the NextActionsScreen component

export default function NextActionsScreen() {
  const context = useContext(TaskContext);
  const [filter, setFilter] = useState<string | null>(null);
// Check if context is available
  // If context is not available, return null to avoid errors
  // Destructure nextActions and setNextActions from the context
  if (!context) return null;
// Destructure nextActions and setNextActions from the context
  // This allows us to access the next actions and the function to update them
  const { nextActions, setNextActions } = context;
// Filter the next actions based on the selected context
  // If a filter is selected, only show actions that match the context
  const filteredActions = filter
    ? nextActions.filter((a: NextAction) => a.context === filter)
    : nextActions;
// Function to mark an action as complete
  // This function removes the action with the given id from the next actions list
  const markComplete = (id: string) => {
    setNextActions(nextActions.filter((a: NextAction) => a.id !== id));
  };
// Render the NextActionsScreen component
  // This component displays a list of next actions with options to filter by context
  // It also provides a button to mark actions as complete
  return (
   
<View style={{ padding: 16 }}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
    <Chip
      selected={filter === null}
      onPress={() => setFilter(null)}
      style={{ backgroundColor: filter === null ? '#222' : '#fff' }}
      textStyle={{ color: filter === null ? '#fff' : '#222' }}
    >
      All
    </Chip>
    <Chip
      selected={filter === '@home'}
      onPress={() => setFilter('@home')}
      style={{ backgroundColor: filter === '@home' ? '#222' : '#fff' }}
      textStyle={{ color: filter === '@home' ? '#fff' : '#222' }}
    >
      @home
    </Chip>
    <Chip
      selected={filter === '@computer'}
      onPress={() => setFilter('@computer')}
      style={{ backgroundColor: filter === '@computer' ? '#222' : '#fff' }}
      textStyle={{ color: filter === '@computer' ? '#fff' : '#222' }}
    >
      @computer
    </Chip>
    <Chip
      selected={filter === '@errands'}
      onPress={() => setFilter('@errands')}
      style={{ backgroundColor: filter === '@errands' ? '#222' : '#fff' }}
      textStyle={{ color: filter === '@errands' ? '#fff' : '#222' }}
    >
      @errands
    </Chip>
  </View>
  
      <FlatList
        data={filteredActions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description={item.context}
            right={() =>              <Button
                onPress={() => markComplete(item.id)}
                mode="contained"
                buttonColor="#222" 
                textColor="#fff"
              >
                Done
              </Button>}
          />
        )}
      />
    </View>
  );
}