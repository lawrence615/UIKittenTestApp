import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = new createAsyncThunk('posts/fetchMorePosts', async () => {

  let newArr = []
  for (let index = 0; index < 10; index++) {
    newArr.push({
      title: 'New Title for Item ',
      description: 'Description for Item',
    })
  }
  return newArr
})