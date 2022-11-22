import { Search } from "../models/Search";

export interface ProductRepositoy {
    getProducts: (query: string) => Promise<Search>
}