
import { Product } from "../Models/Product";
import { Search } from "../Models/Search";

export interface ProductService {
    getProducts: (query: string) => Promise<Search>,
    getProductById: (id: string) => Promise<Product>,
}