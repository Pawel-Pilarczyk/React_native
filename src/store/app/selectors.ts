import {RootState} from '../store';

export const selectIsLoggedIn = (state: RootState) => state.app.isLoggedIn;
