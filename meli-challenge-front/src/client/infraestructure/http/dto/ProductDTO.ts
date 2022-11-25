import { Price } from "./PriceDTO";

export interface ProductDTO {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    description: string;
}
