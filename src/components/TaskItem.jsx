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
      <div className="taskTitle-Description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="taskCreationTime">
        <span>Created: {date}</span>
      </div>

      <div className='taskStatus-Edit'>
        <span className='status' onClick={handleToggleStatus}>{status}</span>
        <span onClick={handleEdit}>Edit</span>
        <span onClick={handleDelete}>Delete</span>
      </div>

      <div className='priority'>
        <span>{priority}</span>
      </div>
    </TaskItemWrapper>
  )
}

export default TaskItem;

const TaskItemWrapper = styled.div`

    padding: 1rem 6rem 1rem 2rem;
    margin: 1rem 0;
    background-color: white;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.18);
    border-radius: 0.5rem;
    position: relative;
    cursor: default;

    .taskTitle-Description{
     word-wrap: break-word;
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
        padding: 1rem 3rem 0 0;
        border-top: 1px solid gray;
        color: gray;
        font-weight: 600;
    }

    .taskStatus-Edit span{
        display: inline-block;
        padding: 0.5rem 1rem ;
        margin: 1rem 0.5rem;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 0.7rem;
        font-size: medium;
        font-weight: 600;
        cursor: pointer;
    }

    .taskStatus-Edit .status{
        background-color: #00a400;
        color: white;
    }

    .priority span{
        display: inline-block;
        padding: 0.4rem 1.2rem;
        background: red;
        color: white;
        font-weight: 600;
        border-radius: 1rem;

        position: absolute;
        top: 2rem;
        right: 1rem;
    }

    @media (max-width:900px){

    padding: 1rem 5rem 1rem 1rem;

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


    .taskStatus-Edit span{
        padding: 0.4rem 1rem ;
        margin: 1rem 0.4rem 0.5rem 0;
        font-size: small;
    }

    .priority span{

        position: absolute;
        top: 2rem;
        right: 0.5rem;
    }

    }

`
