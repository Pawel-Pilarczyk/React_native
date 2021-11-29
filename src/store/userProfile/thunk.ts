import {createAsyncThunk} from '@reduxjs/toolkit';
import fetchActions from '@utils/fetch';

export const fetchPosts = createAsyncThunk('userProfile/fetchPosts', () => {
  const response = fetchActions.get('posts');
  return response;
});
