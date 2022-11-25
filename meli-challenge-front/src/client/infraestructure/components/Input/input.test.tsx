/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from '.';

describe(`Input Component`, () => {
  it(`render button`, () => {

    const onChange = () => {};

    render(<Input onChange={onChange} />);

    const input = screen.getByRole(`textbox`);

    expect(input).toBeInTheDocument();
  });
});
