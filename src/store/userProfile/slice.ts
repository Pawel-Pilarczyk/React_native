import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TUserProfileSlice} from './types';
import {fetchPosts} from './thunk';

const initialState: TUserProfileSlice = {
  posts: [],
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<any>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const {setPosts} = userProfileSlice.actions;

export default userProfileSlice.reducer;
