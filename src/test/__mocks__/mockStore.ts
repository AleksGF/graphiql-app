import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export const initialState: PreloadedState<RootState> = {
  user: { user: null },
};

export const stateWithUser: PreloadedState<RootState> = {
  user: { user: { email: 'test@test.com', id: 'some_id' } },
};