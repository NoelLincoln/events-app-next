import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/shared/Header';

describe('Header component', () => {
  test('renders logo', () => {
    const { getByAltText } = render(<Header />);
    const logo = getByAltText('TechTide Meetups');
    expect(logo).toBeInTheDocument();
  });

  test('renders login button when user is not signed in', () => {
    const { getByText } = render(<Header />);
    const loginButton = getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });

});
