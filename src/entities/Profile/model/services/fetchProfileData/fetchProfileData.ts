import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { Profile } from '../../types/profile'

interface LoginByUsernameProps {
  username: string
  password: string
}

enum LoginError {
  INCORRECT_DATA = '',
  SERVER_ERROR = ''
}
export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (_: void, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.get<Profile>('/profile')

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
