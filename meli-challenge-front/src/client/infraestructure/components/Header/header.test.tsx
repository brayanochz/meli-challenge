/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '.';

const mock = { get: () => {return undefined}};
jest.mock('../../../domain/hooks/useQuery', () => ({
    useQuery: () => {
       return mock;
   },
}));

describe(`Header Component`, () => {

  it(`render input`, () => {
    render(<Header />);

    const input = screen.getByRole(`textbox`);

    expect(input).toBeInTheDocument();
  });

  it(`render button`, () => {
    render(<Header />);

    const button = screen.getByRole(`button`);

    expect(button).toBeInTheDocument();
  });
});
