import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinksPage } from "../Linkspage.js";

test('Test LinksPage', () => {
    render(<LinksPage/>);
    const headerElement = screen.getByText('Web Links');
    expect(headerElement).toBeInTheDocument();
});