import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AboutPage } from "../Aboutpage.js";

test('Test AboutPage', () => {
    render(<AboutPage/>);
    const headerElement = screen.getByText('About Me');
    expect(headerElement).toBeInTheDocument();
});