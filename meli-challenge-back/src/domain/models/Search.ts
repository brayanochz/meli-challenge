import { Product } from "./Product";

export type Autor = {
    name: string;
    lastname: string;
}

export type Search = {
    categories: string[];
    items: Product[];
}