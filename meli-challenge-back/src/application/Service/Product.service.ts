import { ProductService } from "../../Domain/Services/Product.service";
import { productRepository } from "../../Infraestructure/Repositories/Product.repository";

export const productService: ProductService = {
    getProducts: async (query: string) => {
        return await productRepository.getProducts(query)
    },
    getProductById: async (id: string) => {
        return await productRepository.getProductById(id)
    },
}