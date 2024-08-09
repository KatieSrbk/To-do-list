import { createSlice } from '@reduxjs/toolkit'

const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    todosArray: [],
  },
  reducers: {},
})

export default taskListSlice.reducer
