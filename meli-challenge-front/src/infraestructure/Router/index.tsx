import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductListV1 } from "../components/ProductList";
import Layout from "../Pages/Layout";
import ProductDetail from "../Pages/ProductDetail";
import ProductList from "../Pages/ProductList";
import ProductSearch from "../Pages/ProductSearch";

export default function Router() {
    console.log('reouter')
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductSearch />} />
          <Route path="list" element={<ProductList />} />
          <Route path="detail" element={<ProductDetail />} />
          <Route path="v1" element={<ProductListV1 />} />
          <Route path="*" element={<p>404 not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}