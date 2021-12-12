import {createAsyncThunk} from '@reduxjs/toolkit';
import fetchActions from '@utils/fetch';
import {TPost} from './types';
import {TPartialPayload} from 'store/type';

export const fetchPosts = createAsyncThunk<void, TPartialPayload>(
  'userProfile/fetchPosts',
  async ({onSuccess, onError}) => {
    try {
      const response: TPost[] = await fetchActions.get('posts');
      onSuccess?.(response);
    } catch (error) {
      onError?.(error);
    }
  },
);
