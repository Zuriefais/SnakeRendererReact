import { configureStore } from '@reduxjs/toolkit'
import pathnameReducer, { pathname } from './PathnameSlice'

export default configureStore({
  reducer: {
    pathname: pathnameReducer
  },
})