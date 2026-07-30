// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PulseNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PulseNexus/i);
    expect(titleElement).toBeInTheDocument();
});
