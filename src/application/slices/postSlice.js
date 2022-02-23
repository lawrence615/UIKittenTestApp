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
      console.log('setLoadMore', action.payload)

      state.loadMore = action.payload
    },
    setInitialPosts: (state, action) => {

      const initialData = new Array(10).fill({
        title: 'Title for Item',
        description: 'Description for Item',
      });

      state.posts = initialData
    },
    // onLoadMorePosts: (state, action) => {
    //   console.log('onLoadMorePosts:loadMore', state.loadMore)

    //   if (state.loadMore || state.allLoaded)
    //     return

    //   state.loadMore = true

    //   // let maxPosts = state.posts.length + 10
    //   // for (let index = state.posts.length; index < maxPosts; index++) {
    //   //   state.posts.push({
    //   //     title: 'New Title for Item ',
    //   //     description: 'Description for Item',
    //   //   })
    //   // }
    //   console.log('posts count', state.posts.length)
    //   console.log(fetchMorePosts())
    //   state.loadMore = false
    //   state.allLoaded = state.posts.length === 100 ? true : false
    // }
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