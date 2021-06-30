import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from "../navbar.js";

test('Test Navbar', () => {
    render(<Navbar/>);
});