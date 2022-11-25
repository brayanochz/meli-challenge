/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductCard from '.';
import Product from '.';

let mockProduct = {
    "id":"MLA907016019",
    "title":"Carpeta Escolar NÂ°3 - Harry Styles Fine Line One Direction",
    "price":{
       "amount":1899,
       "currency":"ARS",
       "decimals":0
    },
    "picture":"http://http2.mlstatic.com/D_902596-MLA49036831172_022022-I.jpg",
    "condition":"new",
    "free_shipping":false,
    "address":{
       "state_id":"AR-C",
       "state_name":"Capital Federal",
       "city_id":"TUxBQkNBQjM4MDda",
       "city_name":"Caballito"
    }
}

describe(`Product Card Component`, () => {
  it(`render Product Card`, () => {

    render(<ProductCard product={mockProduct} />);

    const titulo = screen.getByText("Carpeta Escolar NÂ°3 - Harry Styles Fine Line One Direction");
    const image = screen.getByRole("img", {
        name: "Carpeta Escolar NÂ°3 - Harry Styles Fine Line One Direction"
    });

    expect(titulo).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it(`render Product Card free shipping`, () => {

    mockProduct.free_shipping = true;

    render(<ProductCard product={mockProduct} />);

    const titulo = screen.getByText("Carpeta Escolar NÂ°3 - Harry Styles Fine Line One Direction");
    const image = screen.getByRole("img", {
        name: "free_shipping"
    });

    expect(titulo).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
