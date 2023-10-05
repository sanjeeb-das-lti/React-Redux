import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload.text.trim().length > 0) {
                const todo = {
                    id: nanoid(),
                    text: action.payload.text,
                    completed: false,
                    date: action.payload.date
                }
                state.todos.push(todo)
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload)
        },
        openTodo: (state, action) => {
            const updatedTodoIndex = state.todos.findIndex(todo => todo.id === action.payload);
            if (updatedTodoIndex !== -1) {
                state.todos[updatedTodoIndex].completed = !state.todos[updatedTodoIndex].completed;
            }
        },
    }
})

export const { addTodo, removeTodo, openTodo } = todoSlice.actions

export default todoSlice.reducer