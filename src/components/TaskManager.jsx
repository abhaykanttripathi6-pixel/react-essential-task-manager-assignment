import React from 'react';
import styled from 'styled-components';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskManager = () => {
    return (
        <AppWrapper>
            <AppHeader>
                <div>
                    <h1>Task Manager</h1>
                    <p>Built with React Context API and useReducer</p>
                </div>
            </AppHeader>

            <MainWrapper>
                <TaskInput />
                <TaskList />
            </MainWrapper>
        </AppWrapper>
    )
}

export default TaskManager;


const AppWrapper = styled.div`
    
    min-height: 100vh;
    padding: 2rem 5rem;

    @media screen {
        padding: 2rem;
    }
`

const AppHeader = styled.header`

    div{
        height: 10rem;
        margin-bottom: 0.5rem;
        color: white;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    div  h1{
        font-size: 3rem;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }

    div  p{
        font-size: large;
        font-weight: 100;
    }



    @media (max-width:900px){

    div{
        height: 5rem;
    }

    div  h1{
        font-size: 2rem;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    }

    div  p{
        font-size: small;
        font-weight: 100;
    }    
        
    }
`

const MainWrapper = styled.main`
    
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 300px minmax(300px,1fr);
    gap: 1rem;

    @media (max-width:900px){
        grid-template-columns:minmax(300px,1fr);
    }

`