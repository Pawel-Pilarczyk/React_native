import {RootState} from 'store/store';

export const getPosts = (state: RootState) => state.userProfile.posts;
