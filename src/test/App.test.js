import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.js';

describe('Main App', () => {
  it('renders the main app without any errors', () => {
    render(<App/>);
  });
});