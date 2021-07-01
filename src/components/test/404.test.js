import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageNotFound } from "../404.js";

test('Test Navbar', () => {
    render(<PageNotFound/>);
});