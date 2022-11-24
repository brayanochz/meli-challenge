import { Product } from "../Models/Product";
import { Search } from "../Models/Search";

export interface ProductRepositoy {
    getProducts: (query: string) => Promise<Search>,
    getProductById?: (id: string) => Promise<Product>
}