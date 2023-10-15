import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        //listen when tasks updates to catch data on localstorage
        isTasksUpdated: false,

        //dummy array  tasks
        tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [
            { id: 1, description: 'Task 1', status: 'Not Started' },
            { id: 2, description: 'Task 2', status: 'In Progress' },
            { id: 3, description: 'Task 3', status: 'Finished' },
            { id: 4, description: 'Task 4', status: 'Not Started' },
            { id: 5, description: 'Task 5', status: 'In Progress' },
        ]
    },
    reducers: {
        addTask: (state, action) => {
            //add logic
            state.tasks.push(action.payload)
            state.isTasksUpdated = true
        },
        editTask: (state, action) => {
            //edit logic
            const { id, description, status } = action.payload;
            const taskToEdit = state.tasks.find((task) => task.id === id);
            if (taskToEdit) {
                taskToEdit.description = description;
                taskToEdit.status = status;
            }
            state.isTasksUpdated = true
        },
        deleteTask: (state, action) => {
            //edit logic
            const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
            if (taskIndex !== -1) {
                state.tasks.splice(taskIndex, 1);
            }
            state.isTasksUpdated = true
        },
        resetTaskUpdatedToggle: (state, action) => {
            state.isTasksUpdated = false;
        }
    },
})

export const { addTask, editTask, deleteTask, resetTaskUpdatedToggle } = taskSlice.actions
export default taskSlice.reducer;