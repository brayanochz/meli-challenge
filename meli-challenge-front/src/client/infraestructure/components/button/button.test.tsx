/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './';

describe(`Button Component`, () => {
  it(`render button`, () => {
    render(<Button>Test</Button>);

    const button = screen.getByRole(`button`, {
      name: /test/i,
    });

    expect(button).toBeInTheDocument();
  });
});
