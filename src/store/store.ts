import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './app/slice';
import UserProfileReducer from './userProfile/slice';

export const store = configureStore({
  reducer: {
    app: AppReducer,
    userProfile: UserProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
