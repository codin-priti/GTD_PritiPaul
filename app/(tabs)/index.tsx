import React from 'react';

import { TaskProvider } from '@/context/TaskContext';
import InboxScreen from '@/screens/Inbox';
import NextActionsScreen from '@/screens/NextActions';
import ProcessScreen from '@/screens/Process';
import ProjectsScreen from '@/screens/Projects';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';


// Define the type for the navigation stack
const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Inbox: undefined;
  Process: { item: { id: string; title: string; context?: string } };
  Projects: undefined;
  'Next Actions': undefined;
};
// Define the type for the navigation prop
export default function App() {
  return (
    <PaperProvider>
      <TaskProvider>
          <Stack.Navigator>
            <Stack.Screen name="Inbox" component={InboxScreen} />
            <Stack.Screen name="Process" component={ProcessScreen} />
            <Stack.Screen name="Projects" component={ProjectsScreen} />
            <Stack.Screen name="Next Actions" component={NextActionsScreen} />
          </Stack.Navigator>
      </TaskProvider>
    </PaperProvider>
  );
}