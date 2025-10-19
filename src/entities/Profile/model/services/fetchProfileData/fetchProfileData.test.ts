import axios from 'axios'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchProfileData } from './fetchProfileData'

jest.mock('axios')

const data = {
  username: 'admin',
  first: 'Alex',
  lastName: 'Akimov',
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Ryazan',
  age: 35,
  avatar: 'https://avatars.githubusercontent.com/u/46198243?s=400&u=a0e5f7b6b9da86599e8571d4e6c424f771028abb&v=4',
}

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('login with 403 error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
