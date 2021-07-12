import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinksPage } from '../Linkspage.js';

describe('LinksPage', () => {
    it('renders the links page correctly', () => {
        render(<LinksPage/>);
        const headerElement = screen.getByText('Web Links');
        expect(headerElement).toBeInTheDocument();
    });
});