import { http } from  '../../infraestructure/http/http'
import { SearchDTO } from "../http/dto/SearchDTO"
import { Product } from "../../domain/models/Product"
import { ProductRepositoy } from '../../domain/repositories/product.repository'
import { Autor } from '../../domain/models/Autor'

const API_URL = process.env.REACT_APP_API_URL

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
    }
}
