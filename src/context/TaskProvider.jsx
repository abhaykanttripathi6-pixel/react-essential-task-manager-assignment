import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';
import reducer from '../reducer/TaskReducer';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {

  const initialstate = {
    tasks: [],
    searchTerm: "",
    edit: null,
    category:"All"
     
  };

  const [state, dispatch] = useReducer(reducer, initialstate);
  console.log("initialstate", state)

  const addTask = (title, description, Priority) => {
    dispatch({ type: "ADD_TASK", payload: { taskTitle: title, taskdescription: description, taskPriority: Priority } })
  };

  const searchTask = (searchTerm) => {
    dispatch({ type: "TASK_SEARCH", payload: searchTerm })
  };

  const toggleTaskStatus = (status, id) => {
    dispatch({ type: "TOGGLE", payload: { status: status, id: id } })
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE", payload: id })
  };

  const editTask = (id, title, description, priority) => {
    dispatch({ type: "EDIT", payload: { id: id, title: title, description: description, priority: priority } });
  };

  const updateTask = (id, title, description, priority) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { id, title, description, priority }
    });
  };

  const filterTask = (categorey) => {
    dispatch({ type: "FILTER", payload: categorey });
  };

  return (
    <TaskContext.Provider value={{ ...state, addTask, searchTask, toggleTaskStatus, editTask, updateTask, deleteTask, filterTask }}>
      {children}
    </TaskContext.Provider>
  )

}



const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used inside the TaskContext Provider");
  }

  return context;
}

export { TaskProvider, useTaskContext };
