import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchActions} from '@utils';
import {TPost} from './types';
import {TPartialPayload} from 'store/type';

export const fetchPosts = createAsyncThunk<void, TPartialPayload>(
  'userProfile/fetchPosts',
  async ({onSuccess, onError}) => {
    try {
      const response: TPost[] = await fetchActions.get('posts');
      return onSuccess?.(response);
    } catch (error) {
      return onError?.(error);
    }
  },
);
