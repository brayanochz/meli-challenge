import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import ProductDetail from "../Pages/ProductDetail";
import ProductList from "../Pages/ProductList";
import ProductSearch from "../Pages/ProductSearch";

export default function Router() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductSearch />} />
          <Route path="items" element={<ProductList />} />
          <Route path="items/:id" element={<ProductDetail />} />
          <Route path="*" element={<p>404 not found</p>} />
        </Route>
      </Routes>
    );
}