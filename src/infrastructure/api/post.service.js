import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = new createAsyncThunk('posts/fetchMorePosts', async (currentPostsCount) => {

  if (currentPostsCount == 100) return

  let newArr = []
  let maxPosts = currentPostsCount + 10

  for (let index = currentPostsCount; index < maxPosts; index++) {
    newArr.push({
      title: 'New Title for Item ',
      description: 'Description for Item',
    })
  }


  return newArr
})