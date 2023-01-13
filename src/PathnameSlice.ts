import { createSlice } from '@reduxjs/toolkit'
import { useDebugValue } from 'react'

export const pathname = createSlice({
  name: 'pathname',
  initialState: {
    value: "/"
    
  },
  reducers: {
    ChangePathname: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { ChangePathname } = pathname.actions

export default pathname.reducer