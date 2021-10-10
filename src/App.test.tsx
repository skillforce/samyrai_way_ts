import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {SamuraiJSApp} from './App';

test('renders DOM with Friends in HTML Doc.', () => {
  render(<SamuraiJSApp/>);
  const linkElement = screen.getByText(/Друзья/i);
  expect(linkElement).toBeInTheDocument();
});
