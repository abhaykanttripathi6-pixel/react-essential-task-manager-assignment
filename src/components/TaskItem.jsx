import React, { useState } from 'react'
import styled from 'styled-components';
import { useTaskContext } from '../context/TaskProvider';

const TaskItem = ({ id, title, description, date, status, priority }) => {

  const { toggleTaskStatus, editTask, deleteTask } = useTaskContext();

  const handleToggleStatus = () => {
    toggleTaskStatus(status === "Pending" ? "Completed" : "Pending", id);
  }

  const handleDelete = () => {
    const verify = confirm("Are you sure ? , do you want to delete task?")
    if (verify) {
      return deleteTask(id);
    }
  };

  const handleEdit = () => {
    const verify = confirm("Do you want to edit your task?")
    if (verify) {
      return editTask(id, title, description, priority);
    }
  }

  return (
    <TaskItemWrapper>
      <div className={`taskTitle-Description ${(status == 'Completed') ? 'done' : ''}`}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="taskCreationTime">
        <span>Created: {date}</span>
      </div>

      <div className='taskStatus-wrapper'>
        <div className='taskSatus'>
          <span>Task Status:</span>
          <span className='status'>{status}</span>
        </div>

        <div className='priority-sec'>
          <span>Task Priority:</span>
          <span className='priority'>{priority}</span>
        </div>

        <div className="taskStatus-input">
          <input id='checkbox' type="checkbox" onChange={handleToggleStatus} />
          <label htmlFor='checkbox'>Mark as completed</label>
        </div>
      </div>

      <div className='edit'>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </TaskItemWrapper>
  )
}

export default TaskItem;

const TaskItemWrapper = styled.div`

    padding: 2rem;
    margin: 1rem 0;
    background-color: white;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.18);
    border-radius: 0.5rem;
    cursor: default;

    .taskTitle-Description{
     word-wrap: break-word;
    }

    .done{
      text-decoration: line-through;
    }

    .done p {
      opacity: 0.8;
    }

    .taskTitle-Description h1{
       font-size: large;
       font-weight: 600;
    }

    .taskTitle-Description p{
        margin: 1rem 0;
        font-size: medium;
        font-weight: 400;
    }

    .taskCreationTime{
        width: fit-content;
        padding: 1rem 0;
        border-top: 1px solid gray;
        color: gray;
        font-weight: 600;
    }

    .taskStatus-wrapper{
      padding:0.8rem 0;
      font-size: medium;
      font-weight: 500;
      color: gray;
    }
 
    .status, .priority{
      display: inline-block;
      padding: 0.3rem 0.5rem ;
      margin: 0.2rem 0.5rem;
      background-color: #00a400;
      border-radius: 0.7rem;
      font-size: small;
      font-weight: 600;
      cursor: pointer;
      color: white;
    }

    .priority{
        background: red;
    }

    .taskStatus-input{
     display: flex ;
     align-items: center;
     gap: 0.5rem;
     margin-top: 1rem;
    }

   .taskStatus-input input{
     height: 1rem;
     width: 1rem;
   }

    .edit{
      width: fit-content;
      display: flex;
      gap:1rem;
    }

    .edit button{
        flex:1;
        padding: 0.5rem 1.5rem;
        background: rgba(0, 0, 0, 0.1);
        border: none;
        border-radius: 0.7rem;
        color: rgba(0, 0, 0, 0.6);
        font-size: medium;
        font-weight: 600;
        cursor: pointer;
    }

    @media (max-width:900px){

    padding: 1rem;

    .taskTitle-Description{
     word-wrap: break-word;
    }

    .taskTitle-Description h1{
       max-height: 6rem;
       font-size: small;
       font-weight: 600;
       overflow-x: scroll;
    }

    .taskTitle-Description p{
        max-height: 6rem;
        margin: 1rem 0;
        font-size: small;
        font-weight: 400;
        overflow-x: scroll;
    }

    .edit{
      width: 100%;
    }

    .edit button{
        padding: 0.5rem;
    }

    }

`
