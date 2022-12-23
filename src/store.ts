import { configureStore } from '@reduxjs/toolkit'
import socketReducer from './SocketSlice'

export default configureStore({
  reducer: {
    socket: socketReducer
  },
})