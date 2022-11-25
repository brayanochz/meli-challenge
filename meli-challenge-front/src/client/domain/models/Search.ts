import { Autor } from "./Autor";
import { Product } from "./Product";

export interface Search {
    autor: Autor;
    categories: string[];
    items: Product[];
}
