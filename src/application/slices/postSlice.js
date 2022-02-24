import { createSlice } from '@reduxjs/toolkit'

import { fetchPosts } from 'api/post.service'

const initialState = {
  loadMore: false,
  allLoaded: false,
  posts: []
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setLoadMore: (state, action) => {
      state.loadMore = true
    },
    setInitialPosts: (state, action) => {
      const initialData = new Array(10).fill({
        title: 'Title for Item',
        description: 'Description for Item',
      });

      state.posts = initialData
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      // state.loadMore = true
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      action.payload.forEach(function (value) {
        state.posts.push(value)
      });

      state.loadMore = false
      state.allLoaded = state.posts.length === 100 ? true : false

    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loadMore = false
      state.posts = []
    });
  }
})



export const { setInitialPosts, setLoadMore } = postSlice.actions
export default postSlice.reducer