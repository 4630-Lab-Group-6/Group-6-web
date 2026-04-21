import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getAllByText('Orders')[0]).toBeInTheDocument();
  });

  it('should render the Payment link', () => {
    render(<App />);
    expect(screen.getAllByText('Payment')[0]).toBeInTheDocument();
  });

  it('should render the Home link', () => {
    render(<App />);
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toBeInTheDocument();
  });

  it('should render the Explore header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument();
  });
});