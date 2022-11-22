import { productRepository } from "../../infraestructure/repositories/product.repository";

export const productService = {
    getProducts: async (query: string) => {
        return await productRepository.getProducts(query)
    }
}