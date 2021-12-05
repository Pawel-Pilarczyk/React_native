import {createSlice} from '@reduxjs/toolkit';
import {TAppSlice} from './types';

const initialState: TAppSlice = {
  isLoggedIn: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    logIn: state => {
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.isLoggedIn = false;
    },
  },
});

export default appSlice.reducer;
