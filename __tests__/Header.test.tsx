import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/shared/Header'; // Adjust the path to your Header component
import NextImageMock from '@/__mocks__/nextImageMock';

jest.mock('query-string', () => ({
  __esModule: true,
  default: {
    parse: jest.fn(),
    stringify: jest.fn(),
  },
}));

// Mock dependencies (SignedIn, SignedOut, UserButton, etc.)
jest.mock('@clerk/nextjs', () => ({
  SignedIn: ({ children }) => children,
  SignedOut: ({ children }) => children,
  UserButton: () => <div>Mocked UserButton</div>,
}));

describe('Header component', () => {
  test('renders logo image', () => {
    render(<Header />, { wrapper: NextImageMock });
    const logoImage = screen.getByAltText('TechTide Meetups');
    expect(logoImage).toBeInTheDocument();
  });

  test('displays navigation items when user is signed in', () => {
    // Mock the signed-in state
    // Render the Header component
    // Assert that navigation items are displayed
  });

  test('displays login button when user is signed out', () => {
    // Mock the signed-out state
    // Render the Header component
    // Assert that the login button is displayed
  });
});
