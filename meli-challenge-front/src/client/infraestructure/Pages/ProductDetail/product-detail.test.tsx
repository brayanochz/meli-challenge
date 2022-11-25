/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductDetail from '.';

const mock = { get: () => {return undefined}};
jest.mock('../../../domain/hooks/useQuery', () => ({
    useQuery: () => {
       return mock;
   },
}));

describe(`Product Detail`, () => {

  it(`render input`, () => {
    render(<ProductDetail />);
  });
});
