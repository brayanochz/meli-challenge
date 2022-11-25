import { http } from  '../../infraestructure/http/http'
import { SearchDTO } from "../http/dto/SearchDTO"
import { Product } from "../../domain/models/Product"
import { ProductRepositoy } from '../../domain/repositories/product.repository'
import { Autor } from '../../domain/models/Autor'
import { ProductDTO } from '../http/dto/ProductDTO'
import { API_URL } from '../../.env'

export const productsRepository: ProductRepositoy = {
    getProducts: async (query: string) => {
        const searchResult = await http.get<SearchDTO>(`${API_URL}/items?q=${query}`)        
        const items: Product[] = [ ...searchResult?.items ];
        const categories: string[] = [ ...searchResult?.categories ];
        const autor: Autor = {
            name: 'nn',
            lastname: 'nn',
        }

        return { items, categories, autor };
    },
    getProductById: async (productId: string) => {
        const productResult = await http.get<ProductDTO>(`${API_URL}/items/${productId}`)        
        const product: Product = productResult;

        return product;
    }
}
