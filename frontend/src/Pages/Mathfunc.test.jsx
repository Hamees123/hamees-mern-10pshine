import { describe, it, expect } from 'vitest'
import { add, isEven } from './Mathfunc'
import MathMessage from './Mathfunc'
import { render, screen } from '@testing-library/react'

describe('mathUtils functions', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
  })

  it('should correctly determine if a number is even', () => {
    expect(isEven(2)).toBe(true)
    expect(isEven(3)).toBe(false)
  })
})

describe('MathMessage component', () => {
  it('renders even number message', () => {
    render(<MathMessage number={4} />)
    expect(screen.getByText('4 is even')).toBeInTheDocument()
  })

  it('renders odd number message', () => {
    render(<MathMessage number={5} />)
    expect(screen.getByText('5 is odd')).toBeInTheDocument()
  })
})
