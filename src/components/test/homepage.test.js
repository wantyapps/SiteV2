import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from '../Homepage.js';

describe('HomePage', () => {
    it('renders the home page correctly', () => {
        render(<HomePage/>);
        const headerElement = screen.getByText('We build software.');
        expect(headerElement).toBeInTheDocument();
    });
});