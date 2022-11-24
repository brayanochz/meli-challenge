export type Price = {
    currency: string;
    amount: number;
    decimals: number;
}

export type Address = {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
}

export type Product = {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    address?: Address;
    description?: string;
}

export type Products = Product[];