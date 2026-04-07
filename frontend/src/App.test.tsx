import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  it('should render the Orders links', () => {
    render(<App />);
    expect(screen.getAllByText('Orders').length).toBeGreaterThan(0);
  });

  it('should render the Payment links', () => {
    render(<App />);
    expect(screen.getAllByText('Payment').length).toBeGreaterThan(0);
  });

  it('should render the Home links', () => {
    render(<App />);
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0);
  });

  it('should render the Explore header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument();
  });
});
