import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FullNavBar } from '../Navbar.js';

describe('NavBar', () => {
    describe('renders the navigation bar correctly', () => {
        it('renders the home button correctly', () => {
            render(
                <FullNavBar/>
            );
            const homeButton = screen.getByText('Home');
            expect(homeButton).toBeInTheDocument();    
        });
        it('renders the about button correctly', () => {
            render(
                <FullNavBar/>
            );
            const aboutButton = screen.getByText('About');
            expect(aboutButton).toBeInTheDocument();
        });
        it('renders the links button correctly', () => {
            render(
                <FullNavBar/>
            );
            const linksButton = screen.getByText('Links');
            expect(linksButton).toBeInTheDocument();
        });
        it('renders the developer button correctly', () => {
            render(
                <FullNavBar/>
            );
            const developerButton = screen.getByText('Developer');
            expect(developerButton).toBeInTheDocument();
        });
        it('renders the toggle theme button correctly', () => {
            render(
                <FullNavBar/>
            );
            const toggleThemeButton = screen.getByText('Toggle Theme');
            expect(toggleThemeButton).toBeInTheDocument();
        });
    });
});