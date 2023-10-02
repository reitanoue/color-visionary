import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Button', () => {
  it('renders the label', () => {
    const { getByText } = render(<Button label="Click me" />)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('handles onClick', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button label="Click me" onClick={handleClick} />
    )
    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('renders primary style', () => {
    const { getByText } = render(<Button label="Click me" primary />)
    expect(getByText('Click me')).toHaveClass('storybook-button--primary')
  })

  it('renders secondary style when primary is not set', () => {
    const { getByText } = render(<Button label="Click me" />)
    expect(getByText('Click me')).toHaveClass('storybook-button--secondary')
  })

  it('renders correct size', () => {
    const { getByText } = render(<Button label="Click me" size="large" />)
    expect(getByText('Click me')).toHaveClass('storybook-button--large')
  })

  it('renders correct background color', () => {
    const { getByText } = render(
      <Button label="Click me" backgroundColor="red" />
    )
    expect(getByText('Click me')).toHaveStyle('background-color: red')
  })
})
