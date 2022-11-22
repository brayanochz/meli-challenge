import { productsRepository } from "../../infraestructure/repositories/product.repository";

export const productService = {
    getProducts: async (query: string) => {
        return await productsRepository.getProducts(query)
    }
}