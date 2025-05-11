import { screen, fireEvent } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

describe('Sidebar', () => {
  test('test sidebar', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle sidebar', () => {
    componentRender(<Sidebar />)

    // Проверяем, что кнопка существует
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toBeInTheDocument()

    // Проверяем, что сайдбар изначально не свёрнут
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')

    // Кликаем по кнопке
    fireEvent.click(toggleBtn)

    // Проверяем, что сайдбар получил класс 'collapsed'
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
