import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { TaskContext } from '../context/TaskContext';
// Define the type for the navigation stack
type RootStackParamList = {
  Inbox: undefined;
  Process: { item: { id: string; title: string; context?: string } };
  Projects: undefined;
  'Next Actions': undefined;
};
// Define the type for the ProcessScreen component props
// This type includes the navigation and route props for the Process screen

type Props = NativeStackScreenProps<RootStackParamList, 'Process'>;
// Define the ProcessScreen component
// This component allows the user to process an item from the inbox
// It provides options to move the item to a project or mark it as a next action

  export default function ProcessScreen(props: Props) {
    const { route, navigation } = props;
    const { item } = route.params;
    const context = useContext(TaskContext);
  // Check if context is available
  // If context is not available, return null to avoid errors


  if (!context) return null;
  // Destructure the inbox, setInbox, projects, setProjects, nextActions, and setNextActions from the context
  // This allows us to access the inbox, projects, next actions, and the functions to update them
  // This component allows the user to process an item from the inbox

  const { inbox, setInbox, projects, setProjects, nextActions, setNextActions } = context;
  // Function to remove the item from the inbox
  // This function filters the inbox to remove the item with the given id

  const removeFromInbox = () => setInbox(inbox.filter(t => t.id !== item.id));
  // Function to move the item to a project
  // This function removes the item from the inbox and adds it to the projects list

  const moveToProject = () => {
    removeFromInbox();
    setProjects([...projects, { ...item, context: item.context ?? '' }]);
    navigation.navigate('Projects');
  };
  // Function to move the item to the next actions list with a specific context
  // This function removes the item from the inbox and adds it to the next actions list with the specified context

  const moveToNextAction = (contextValue: string) => {
    removeFromInbox();
    setNextActions([...nextActions, { ...item, context: contextValue }]);
    navigation.navigate('Next Actions');
  };
// Render the ProcessScreen component
// This component displays the title of the item and provides buttons to move it to a project or
  return (
  
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge">{item.title}</Text>
      <Button
        onPress={moveToProject}
        style={{ marginTop: 10, backgroundColor: '#222' }}
        mode="contained"
        textColor="#fff"
      >
        Move to Project
      </Button>
      <Button
        onPress={() => moveToNextAction('@home')}
        style={{ marginTop: 10, backgroundColor: '#222' }}
        mode="contained"
        textColor="#fff"
      >
        Next Action @home
      </Button>
      <Button
        onPress={() => moveToNextAction('@computer')}
        style={{ marginTop: 10, backgroundColor: '#222' }}
        mode="contained"
        textColor="#fff"
      >
        Next Action @computer
      </Button>
      <Button
        onPress={() => moveToNextAction('@errands')}
        style={{ marginTop: 10, backgroundColor: '#222' }}
        mode="contained"
        textColor="#fff"
      >
        Next Action @errands
      </Button>
    </View>
  );
};
