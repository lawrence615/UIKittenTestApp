import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: []
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setInitialPosts: (state, action) => {
      state.posts = action.payload
    },
    onLoadMorePosts: (state, action) => { }
  }
})

export const { setInitialPosts, onLoadMorePosts } = postSlice.actions
export default postSlice.reducer