import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface IUser {
  email: string;
  userId: string;
}

const initialState: IUser = { email: '', userId: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { email, userId } = action.payload;
      state.email = email;
      state.userId = userId;
    },

    logout(state) {
      state.email = '';
      state.userId = '';
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

export const selectUserState = (state: RootState): IUser => state.user;
