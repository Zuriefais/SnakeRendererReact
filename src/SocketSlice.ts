import { createSlice } from '@reduxjs/toolkit'
import { useDebugValue } from 'react'

export const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    value: new WebSocket("ws://localhost:9000/")
    
  },
  reducers: {
    ChangeSocket: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { ChangeSocket } = socketSlice.actions

export default socketSlice.reducer