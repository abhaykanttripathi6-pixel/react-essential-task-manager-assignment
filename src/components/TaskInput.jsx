import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTaskContext } from '../context/TaskProvider';



const TaskInput = () => {

    const { addTask, edit, updateTask } = useTaskContext();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState('Low');


    useEffect(() => {
       
       if(edit){
        setTitle(edit.title);
        setDescription(edit.description);
        setTaskPriority(edit.priority);
    }
      return;
    }, [edit])


    const handleSubmit = () => {
        if (title === "" || description === "") return;

        if (edit) {
            updateTask(edit.id, title, description, taskPriority);
        } else {
            addTask(title, description, taskPriority);
        }

        setTitle("");
        setDescription("");
        setTaskPriority("Low");
    };

    return (
        <TaskInputWrapper>
            <h2>Add new Task</h2>
            <div className="taskInput">
                <form onSubmit={(e) => e.preventDefault()}>

                    <div className="titleInput">
                        <label htmlFor="title">Title</label>
                        <input id='title' type='text' placeholder='Enter task title...' required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>


                    <div className="taskDescriptionInput">
                        <label htmlFor="description">Description</label>
                        <textarea name="" id="description" placeholder='Enter task description...' rows={5} required value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>


                    <div className="taskPriorityInput">
                        <label htmlFor="priority">Priority</label>
                        <select id="priority" value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
                            <option value={"Low"}>Low</option>
                            <option value={"Medium"}>Medium</option>
                            <option value={"High"}>High</option>
                        </select>
                    </div>

                    <button type='submit' onClick={handleSubmit}> {edit ? "Update Task" : "Add Task"}</button>

                </form>
            </div>
        </TaskInputWrapper>
    )
}

export default TaskInput;

const TaskInputWrapper = styled.div`

    height: max-content;
    padding: 2rem 1rem;
    background-color: whitesmoke;
    border-radius: 1rem;
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.18);

    h2{
        margin-bottom: 1.5rem;
        font-size: x-large;
        font-weight: 600;
    }

    .taskInput form label{
        display: block;
        margin: 0.8rem 0;
        font-size: medium;
        font-weight: 500;
    }


    .taskInput form .titleInput input, .taskInput form .taskDescriptionInput textarea{
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 2rem;
        border: 2px solid gray;
        border-radius: 0.5rem;
        color: gray;
        font-size: medium;
        font-weight: 500;
        resize: none;
        display: block;
    }


    .taskInput form .taskPriorityInput select{
        width: 100%;
        padding: 0.5rem;
        color: gray;
        border: 2px solid gray;
        border-radius: 0.5rem;
        font-size: medium;
        font-weight: 500;
    }

    .taskInput form .taskPriorityInput select option{
        padding: 0.3rem;
    }

    .taskInput form button{
        width: 100%;
        padding:0.5rem;
        margin: 1.5rem 0;
        background: linear-gradient(45deg, #9AAAF5 0%, #764ba2 100%);
        color: white;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        text-align: center;
        font-weight: 500;
        cursor: pointer;
        transition: all 1s ease-in;

        &:active{
           transform: scale(0.7);
        }
    }


`


