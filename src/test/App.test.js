import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.js';

test('Test main app', () => {
  render(<App/>);
});
