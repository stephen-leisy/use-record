/**
 * @jest-environment jsdom
 */
import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders App', async () => {
    render(<App />);
    
    const input = await screen.getByPlaceholderText('colors');
    fireEvent.change(input, { target: { value: '#FF0000' } });
    expect(input.value).toBe('#ff0000');
  });
});
