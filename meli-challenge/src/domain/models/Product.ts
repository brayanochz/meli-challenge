export type Price = {
    currency: string;
    amount: number;
    decimals: number;
}

export type Product = {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
}

export type Products = Product[];