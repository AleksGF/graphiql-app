import reducer, { setUser } from '@/store/reducers/userSlice';
import { User } from '@/types/user';
import { UserState } from '@/store/reducers/userSlice';

const user: User = {
  email: 'some@email.co',
  id: 'some_id',
};

const nullState: UserState = {
  user: null,
};

const someState: UserState = {
  user,
};

describe('userReducer should work correctly and:', () => {
  it('should return the initial state with undefined', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(nullState);
  });

  it('setUser should work correctly', () => {
    expect(reducer(nullState, setUser(user))).toEqual(someState);
    expect(reducer(someState, setUser(null))).toEqual(nullState);
  });
});
