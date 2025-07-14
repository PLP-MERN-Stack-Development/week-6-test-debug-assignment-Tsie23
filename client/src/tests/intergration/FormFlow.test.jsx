import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

test('renders Home and Button together', () => {
  render(<Home />);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});