import { productService } from "../Service/Product.service";

export const SearchProducts = async (query: string) => {
    try {
        const searchResult =  await productService.getProducts(query as string)
        return searchResult;
    } catch (error: any) {
        console.log(error)
        throw new Error(error.message);
    }
}

