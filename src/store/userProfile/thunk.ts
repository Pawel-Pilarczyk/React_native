import {createAsyncThunk} from '@reduxjs/toolkit';
import fetchActions from '@utils/fetch';

export const fetchPosts = createAsyncThunk(
  'userProfile/fetchPosts',
  async () => {
    const response = await fetchActions.get('posts');
    return response;
  },
);
