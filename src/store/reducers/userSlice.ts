import { User } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  user: User | null;
  isLoading: boolean;
};

const initialState: UserState = {
  user: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setIsLoading } = userSlice.actions;

export default userSlice.reducer;
