import { TaskContext } from '@/context/TaskContext';
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';

// Define the type for a project item
type Project = {
  id: string;
  title: string;
  context?: string;
};

export default function ProjectsScreen() {
  const context = useContext(TaskContext);
// // Check if context is available
  // If context is not available, return null to avoid errors
  // Destructure projects from the context
  if (!context) return null;
// Destructure projects from the context
  // This allows us to access the projects list
  const { projects } = context;
// Render the ProjectsScreen component
  // This component displays a list of projects
  // It uses a FlatList to render each project item
  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <List.Item title={item.title} />}
    />
  );
}