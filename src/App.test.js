import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Navbar from './App';
import MainHTML from './MainHTML';

test('Test Navbar', () => {
  render(<Navbar/>);
});

test('Test main HTML', () => {
  render(<MainHTML/>);
});

test('Test main app', () => {
  render(<App/>);
  const headerElement = screen.getByText('I build software.');
  expect(headerElement).toBeInTheDocument();
});