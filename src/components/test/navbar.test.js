import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavBar, NavBarItem } from '../Navbar.js';

describe('NavBar', () => {
    describe('renders the navigation bar correctly', () => {
        it('renders the home button correctly', () => {
            render(
                <NavBar>
                    <NavBarItem href="/home" text="Home"/>
                    <NavBarItem href="/about" text="About"/>
                    <NavBarItem href="/links" text="Links"/>
                    <NavBarItem href="/api/v1/doc" text="Developer"/>
			    </NavBar> 
            );
            const homeButton = screen.getByText('Home');
            expect(homeButton).toBeInTheDocument();    
        });
        it('renders the about button correctly', () => {
            render(
                <NavBar>
                    <NavBarItem href="/home" text="Home"/>
                    <NavBarItem href="/about" text="About"/>
                    <NavBarItem href="/links" text="Links"/>
                    <NavBarItem href="/api/v1/doc" text="Developer"/>
			    </NavBar> 
            );
            const aboutButton = screen.getByText('About');
            expect(aboutButton).toBeInTheDocument();
        });
        it('renders the links button correctly', () => {
            render(
                <NavBar>
                    <NavBarItem href="/home" text="Home"/>
                    <NavBarItem href="/about" text="About"/>
                    <NavBarItem href="/links" text="Links"/>
                    <NavBarItem href="/api/v1/doc" text="Developer"/>
			    </NavBar> 
            );
            const linksButton = screen.getByText('Links');
            expect(linksButton).toBeInTheDocument();
        });
        it('renders the developer button correctly', () => {
            render(
                <NavBar>
                    <NavBarItem href="/home" text="Home"/>
                    <NavBarItem href="/about" text="About"/>
                    <NavBarItem href="/links" text="Links"/>
                    <NavBarItem href="/api/v1/doc" text="Developer"/>
			    </NavBar> 
            );
            const developerButton = screen.getByText('Developer');
            expect(developerButton).toBeInTheDocument();
        });
    });
});