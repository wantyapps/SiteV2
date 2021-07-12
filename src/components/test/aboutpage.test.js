import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AboutPage } from '../Aboutpage.js';

describe('AboutPage', () => {
    it('renders the about page correctly', () => {
        render(<AboutPage/>);
        const headerElement = screen.getByText('About Me');
        expect(headerElement).toBeInTheDocument();
    });
});