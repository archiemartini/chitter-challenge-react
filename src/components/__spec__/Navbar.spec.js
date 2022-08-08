import React from 'react'
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom'

test('renders the project name', () => {
  render (
    <Navbar />
  );

  const nameElement = screen.getByText(/Chitter/i)
  expect(nameElement).toBeInTheDocument
})