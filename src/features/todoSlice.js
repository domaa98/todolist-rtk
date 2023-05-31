import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoLists: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoLists.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoLists.map((todo) => {
        if (action.payload === todo.id) {
          todo.done ? (todo.done = false) : (todo.done = true);
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodoList = (state) => {
  return state.todos.todoLists;
};
export default todoSlice.reducer;
