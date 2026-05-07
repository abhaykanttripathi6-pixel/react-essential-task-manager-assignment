import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTaskContext } from '../context/TaskProvider';


const TaskFilter = () => {

    const { searchTask, filterTask, category } = useTaskContext();
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const timer = setTimeout(() => {
            searchTask(searchTerm);
        }, 500)

        return () => clearTimeout(timer);
    }, [searchTerm])


    return (
        <TaskFilterWrapper className="taskFilter">
            <div className="taskfilterBySearch">
                <input type="text" placeholder='Search task by title...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className='taskfilterByCategorey'>
                <div className='container'>
                    <h2>Filter</h2>
                    <div className="categoreys">
                        <span className={category === "All" ? "active" : ""} onClick={() => filterTask("All")}>All</span>
                        <span className={category === "Pending" ? "active" : ""} onClick={() => filterTask("Pending")}>Pending</span>
                        <span className={category === "Completed" ? "active" : ""} onClick={() => filterTask("Completed")}>Completed</span>
                    </div>
                </div>
            </div>
        </TaskFilterWrapper>
    )
}

export default TaskFilter;

const TaskFilterWrapper = styled.div`
    
    padding: 1rem;
    background-color: rgba(255, 182, 193, 0.4);
    border-radius: 1rem;

    .taskfilterBySearch input{
        width: 70%;
        padding: 1rem 1.5rem;
        margin-bottom: 2rem;
        border-radius: 2rem;
        border: 2px solid white;
        outline: none;
        font-size: medium;
        transition:all 0.5s ease-in-out;

        &:focus, &:hover{
            border:2px solid gray;
        }
    }

    .taskfilterByCategorey{
        padding: 0 2rem;
        margin-bottom: 3rem;
        display: flex;
        justify-content: flex-end;
        cursor: default;

        .container h2{
            margin-bottom: 0.5rem;
            font-size: medium;
            font-weight: 500;
        }

        .container .categoreys{ 
           background-color: white;
           border-radius: 1rem;
            cursor: pointer;
           span{
            display: inline-block;
            padding: 0.8rem 1.5rem;
            border-radius: 1rem;
            font-size: medium;
            font-weight: 500;
           }
        }
    }

    .active{
        background-color: blue;
        color: white;
    }


    @media (max-width:550px) {


         .taskfilterBySearch input{
        width: 100%;
        padding: 1rem;
        margin-bottom: 2rem;
        border-radius: 1rem;
    }


       .taskfilterByCategorey{

        display: unset;

        .container .categoreys{ 
           span{
            display: inline-block;
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            font-size: small;
            font-weight: 500;
           }
        }
    }
}   

`
