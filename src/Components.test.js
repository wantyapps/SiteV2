import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar, HomePage, AboutPage, LinksPage } from './Components';


test('Test Navbar', () => {
    render(<Navbar/>);
});
  
test('Test HomePage', () => {
    render(<HomePage/>);
    const headerElement = screen.getByText('I build software.');
    expect(headerElement).toBeInTheDocument();
});

test('Test AboutPage', () => {
    render(<AboutPage/>);
    const headerElement = screen.getByText('About');
    expect(headerElement).toBeInTheDocument();
});

test('Test LinksPage', () => {
    render(<LinksPage/>);
    const headerElement = screen.getByText('Links');
    expect(headerElement).toBeInTheDocument();
})