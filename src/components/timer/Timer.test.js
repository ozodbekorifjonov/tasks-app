import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from './Timer';

describe('Timer', () => {
  it('updates the timer value when the "Start" button is clicked', async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(<Timer />);
    const input = getByPlaceholderText('Seconds');
    const button = getByRole('button', { name: /start/i });

    fireEvent.change(input, { target: { value: '3' } });

    fireEvent.click(button);

    expect(getByText('00:00:03')).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
    });

    expect(getByText('00:00:00')).toBeInTheDocument();
  });
});
