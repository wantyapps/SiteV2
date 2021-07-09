import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from "../Homepage.js";

test('Test HomePage', () => {
    render(<HomePage/>);
    const headerElement = screen.getByText('We build software.');
    expect(headerElement).toBeInTheDocument();
});