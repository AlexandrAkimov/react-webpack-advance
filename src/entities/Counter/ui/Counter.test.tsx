import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from '..'

describe('Counter', () => {
  test('test counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('20')
  })

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    })
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('22')
  })

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    })
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('18')
  })
})
