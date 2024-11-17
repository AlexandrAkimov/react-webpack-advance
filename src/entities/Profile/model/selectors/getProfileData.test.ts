import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('should return data', () => {
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
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }

    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
