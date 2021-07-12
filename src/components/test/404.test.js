import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageNotFound } from '../404.js';

describe('PageNotFound', () => {
    it('renders the 404 page correctly', () => {
        render(<PageNotFound/>);
        const headerElement = screen.getByText('Ouch... Page not found.');
        expect(headerElement).toBeInTheDocument();
    });
});