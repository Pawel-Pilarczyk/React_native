import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {TAppSlice} from './app.types';

const initialState: TAppSlice = {
  isLoggedIn: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    logIn: state => ({
      ...state,
      isLoggedIn: true,
    }),
    logoOut: state => ({
      ...state,
      isLoggedIn: false,
    }),
  },
});

export const {logIn, logoOut} = appSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.app.isLoggedIn;

export default appSlice.reducer;
