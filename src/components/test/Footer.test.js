import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../Footer.js';

describe('Footer', () => {
	it('renders the footer with the correct copyright', () => {
		render(<Footer/>);
		const headerElement = screen.getByText("Created by Uri Arev (2021). Copyright (©) Uri Arev " + new Date().getFullYear())
		expect(headerElement).toBeInTheDocument();
	});
});

