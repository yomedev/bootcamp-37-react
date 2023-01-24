import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../services/tokenApi';
import { getProfileService } from '../../services/users.service';
import { selectAuth } from '../auth/selector.auth';
// import { logoutAction } from '../auth/slice.auth';

export const getProfileThunk = createAsyncThunk(
  'profile/getProfile',
  async (_, { getState, rejectWithValue }) => {
    const { access_token, token_type } = selectAuth(getState());
    try {
      if (!access_token || !token_type) {
        return rejectWithValue();
      }

      token.set(`${token_type} ${access_token}`);
      const data = await getProfileService();
      return data;
    } catch (error) {
      token.unset()
      // dispatch(logoutAction())
      return rejectWithValue();
    }
  },
);
