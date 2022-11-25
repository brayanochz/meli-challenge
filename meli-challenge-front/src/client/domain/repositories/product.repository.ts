import { Product } from "../models/Product";
import { Search } from "../models/Search";

export interface ProductRepositoy {
    getProducts: (query: string) => Promise<Search>,
    getProductById: (productId: string) => Promise<Product>,
}