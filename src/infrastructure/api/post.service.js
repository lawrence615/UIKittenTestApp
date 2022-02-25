import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker'

export const fetchPosts = new createAsyncThunk('posts/fetchMorePosts', async () => {

  let newArr = []
  for (let index = 0; index < 10; index++) {
    newArr.push({
      name: faker.name.findName(),
      message: faker.lorem.sentence(5)
    })
  }
  return newArr
})