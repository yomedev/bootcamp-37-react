import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { token } from '../../services/tokenApi';
import { loginUserService } from '../../services/users.service';

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
  try {
    const data = await loginUserService(body);
    token.set(`${data.token_type} ${data.access_token}`); // 'Bearer asjdfajsdff...'
    return data;
  } catch (error) {
    toast.error('Invalid body');
    return rejectWithValue();
  }
});
