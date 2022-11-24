import { productsRepository } from "../../infraestructure/repositories/product.repository";

export const productService = {
    getProducts: async (query: string) => {
        return await productsRepository.getProducts(query)
    },
    getProductById: async (productId: string) => {
        return await productsRepository.getProductById(productId)
    }
}