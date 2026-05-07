import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useTaskContext } from '../context/TaskProvider';

const TaskSummary = () => {

    const { tasks } = useTaskContext();

    const completedTask = tasks.filter((task) => task.taskStatus === "Completed");

    const pendingTask = tasks.filter((task) => task.taskStatus === "Pending");

    return (
        <TaskSummaryWrapper className='taskSummary'>
            <span>Total {tasks.length}</span>
            <span>Completed {completedTask.length}</span>
            <span>Pending {pendingTask.length}</span>
        </TaskSummaryWrapper>
    )
}

export default TaskSummary;

const TaskSummaryWrapper = styled.div`
    
    padding: 1rem;
    margin: 2rem 0;
    background: linear-gradient(135deg, #f97316, #ec4899, #9333ea);;
    border-radius: 1rem;
    cursor: default;

    span{
        display: inline-block;
        padding: 0.6rem 1rem;
        margin-left: 1rem;
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        border-radius: 2rem;
        color: white;
        font-size: medium;
        font-weight: 500;
    }

    @media (max-width:550px) {
        padding: 1rem 0;
    span{
        padding: 0.4rem 0.8rem;
        margin-left: 0.5rem;
        font-size: small;
    }
    }

`
