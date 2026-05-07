import React from 'react';
import styled from 'styled-components';
import TaskFilter from './TaskFilter';
import TaskSummary from './TaskSummary';
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskProvider';


const TaskList = () => {

  const { tasks, searchTerm, category} = useTaskContext();

  let taskToShow = tasks;

  if(category !== "All"){
     taskToShow = taskToShow.filter((task) => task.taskStatus === category);
  }

  if(searchTerm !== ""){
    taskToShow = taskToShow.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  }
 
  

  return (
    <TaskListWrapper>
      <TaskFilter />
      <TaskSummary />

      <div className='taskList'>
        {taskToShow.length !== 0 ? taskToShow.map((task) => {
          return <TaskItem key={task.id}  id={task.id} title={task.title} description={task.description} date={task.date} status={task.taskStatus} priority={task.taskPriority} />
        })
          :
          <EmptyTaskWrapper>Empty Tasklist!!</EmptyTaskWrapper>
        }
      </div>

    </TaskListWrapper>
  )
}

export default TaskList;

const TaskListWrapper = styled.div`
    
    min-height: 60vh;
    padding: 2rem 1rem;
    background-color: whitesmoke;
    border-radius: 1rem;
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.18);

`

const EmptyTaskWrapper = styled.div`
  padding: 2rem;
  font-size: x-large;
  font-weight: 600;
  text-align: center;


  @media (max-width:900px){
    font-size: large;
    font-weight: 500;
  }
`
