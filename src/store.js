import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './components/store/dataSlice'

export default configureStore({
  reducer: {
    navstate: dataSlice,
  },
})