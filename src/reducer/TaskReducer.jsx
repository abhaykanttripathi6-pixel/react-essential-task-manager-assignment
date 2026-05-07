import React from 'react';

const TaskReducer = (state, action) => {
    console.log(action)

    switch (action.type) {

        case "ADD_TASK": {
            const task = {
                id: Date.now(),
                title: action.payload.taskTitle,
                description: action.payload.taskdescription,
                date: new Date().toLocaleDateString(),
                taskStatus: "Pending",
                taskPriority: action.payload.taskPriority
            }

            return { ...state, tasks: [...state.tasks, task] };
        }

        case "TASK_SEARCH": {
            const searchTerm = action.payload.toLowerCase();

            return { ...state, searchTerm };
        }

        case "TOGGLE": {
            const task_Status = action.payload.status;
            const task_ID = action.payload.id;
            const tasks = state.tasks;

            const updatedTask = tasks.map((task) => {
                return task.id === task_ID ? { ...task, taskStatus: task_Status } : task;
            })


            return { ...state, tasks: updatedTask };

        }

        case "DELETE": {
            const updatedTask = state.tasks.filter((task) => task.id !== action.payload);

            return { ...state, tasks: updatedTask };
        }

        case "EDIT": {
            // const updatedTask = state.tasks.filter((task) => task.id !== action.payload.id);

            const editTaskValues = {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                priority: action.payload.priority
            }

            // return { ...state, tasks: updatedTask, edit:editTaskValues};
            return { ...state, edit: editTaskValues };
        }

        case "UPDATE_TASK": {
            const updatedTasks = state.tasks.map((task) =>
                task.id === action.payload.id
                    ? {
                        ...task,
                        title: action.payload.title,
                        description: action.payload.description,
                        taskPriority: action.payload.priority
                    }
                    : task
            );

            return { ...state, tasks: updatedTasks, edit: null };
        }

        case "FILTER": {
            if (action.payload === "All") {
                return { ...state, category:action.payload };
            };


            if (action.payload === "Pending") {
                const filteredTask = state.tasks.filter((task) => task.taskStatus === action.payload
                );

                return { ...state, category:action.payload };
            };

            if (action.payload === "Completed") {
                const filteredTask = state.tasks.filter((task) => task.taskStatus === action.payload)
                return { ...state, category:action.payload };
            };

            return state;
        }

        default:
            return state;
    }
}

export default TaskReducer;
