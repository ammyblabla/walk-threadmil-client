import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App placeholder', () => {
  it('shows the app name', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Walk Planner' })).toBeInTheDocument()
  })

  it('renders a disabled Start button until plans exist', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled()
  })
})
