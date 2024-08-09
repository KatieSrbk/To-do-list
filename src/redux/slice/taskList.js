import { createSlice } from '@reduxjs/toolkit'

const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    todosArray: [],
  },
  reducers: {
    writeInitialTodos: (state, action) => {
      if (localStorage.getItem('localTodos') === null) {
        state.todosArray = []
      } else {
        const newArr = JSON.parse(localStorage.getItem('localTodos'))
        state.todosArray = newArr
      }
    },
    setTodosArray: (state, action) => {
      const newArr = action.payload.array
      state.todosArray = newArr
      if (action.payload.isSaveInStorage === true) {
        localStorage.setItem('localTodos', JSON.stringify(newArr))
      }
    },
  },
})

export const { writeInitialTodos, setTodosArray } = taskListSlice.actions
export default taskListSlice.reducer
