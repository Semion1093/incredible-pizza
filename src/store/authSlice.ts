import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../models/User';
import { UserSignIn } from '../models/UserSignIn';
import { UserSignUp } from '../models/UserSignUp';
import { UserSignInFormData } from '../pages/HomePage/components/AuthModal/SignInSignUp/SignIn';

const tokenInStorage = localStorage.getItem('token') ? localStorage.getItem('token') : '';

export const loginAuth = createAsyncThunk(`auth/loginAuth`, async (user: UserSignIn, { rejectWithValue }) => {
  const response = await fetch('http://localhost:4001/api/v1/public/user/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  if (!response.ok) {
    return rejectWithValue('Данные введены неверно, попробуйте снова');
  }
  const data = await response.json();
  localStorage.setItem('token', data.token);
});

export const registrationAuth = createAsyncThunk(`auth/registrationAuth`, async (newUser: UserSignUp, { rejectWithValue }) => {
  const newUserResponse = await fetch('http://localhost:4001/api/v1/public/user/sign-up', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!newUserResponse.ok) {
    return rejectWithValue('Пользователь не зарегистрирован');
  }
});

export interface AuthState {
  user: User | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuth: Boolean(tokenInStorage),
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload ?? null;
      })
      .addCase(registrationAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registrationAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload ?? null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export const selectAllAuthState = (state: RootState) => state.authUser;
export const selectIsAuthState = (state: RootState) => state.authUser.isAuth;
export const selectAuthUser = (state: RootState) => state.authUser.user;
export const authReducer = authSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
