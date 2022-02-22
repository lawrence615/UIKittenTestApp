import { configureStore } from '@reduxjs/toolkit'

import postSlice from 'slices/postSlice'

export const store = configureStore({
  reducer: {
    post: postSlice
  }
})