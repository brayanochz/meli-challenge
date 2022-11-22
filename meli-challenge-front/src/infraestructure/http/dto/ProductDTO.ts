export type Autor = {
    name: string;
    lastname: string;
}

export type Price = {
    currency: string;
    amount: number;
    decimals: number;
}

export type Item = {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
}


export interface ProductDTO {
    autor: Autor;
    categories: string[];
    items: Item[];
}
