import React from 'react';
import TaskManager from './components/TaskManager';
import { TaskProvider } from './context/TaskProvider';

const App = () => {
  return (
    <TaskProvider>
      <TaskManager />
    </TaskProvider>
  )
}

export default App;
