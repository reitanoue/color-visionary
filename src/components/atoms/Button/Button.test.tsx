import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/'
import { Button } from '.'

describe('<Button />', () => {
  it('指定されたテキストと共にボタンがレンダリングされる', () => {
    render(<Button text="Click me!" />)
    expect(screen.getByText('Click me!')).toBeInTheDocument()
  })

  it('クリック時にonClickが呼び出される', () => {
    const handleClick = jest.fn()
    render(<Button text="Click me!" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Click me!'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('指定された色クラスが適用される', () => {
    render(
      <Button
        text="Colored Button"
        bgcolor="bg-red-500"
        textcolor="text-yellow-500"
      />
    )
    const button = screen.getByText('Colored Button')
    expect(button).toHaveClass('bg-red-500')
    expect(button).toHaveClass('text-yellow-500')
  })

  it('disabledがtrueの場合、ボタンは無効化される', () => {
    render(<Button text="Disabled Button" disabled={true} />)
    expect(screen.getByText('Disabled Button')).toBeDisabled()
  })
})
