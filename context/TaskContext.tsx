import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type Task = {
  context: string;
  id: string;
  title: string;
};
// Define the type for the task context

type TaskContextType = {
  inbox: Task[];
  setInbox: Dispatch<SetStateAction<Task[]>>;
  projects: Task[];
  setProjects: Dispatch<SetStateAction<Task[]>>;
  nextActions: Task[];
  setNextActions: Dispatch<SetStateAction<Task[]>>;
};
// Create the context with an initial value of undefined

export const TaskContext = createContext<TaskContextType | undefined>(undefined);
// Define the type for the provider props
type TaskProviderProps = {
  children: ReactNode;
};
// Create the provider component
export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [inbox, setInbox] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Task[]>([]);
  const [nextActions, setNextActions] = useState<Task[]>([]);

  return (
    // Provide the context value to children components
    <TaskContext.Provider value={{ inbox, setInbox, projects, setProjects, nextActions, setNextActions }}>
      {children}
    </TaskContext.Provider>
  );
};