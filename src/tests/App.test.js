import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('Test main app', () => {
  render(<App/>);
});
