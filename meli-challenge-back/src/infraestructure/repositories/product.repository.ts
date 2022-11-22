import { http } from  '../http/http'
import { SearchDTO } from "../http/dto/SearchDTO"
import { Product } from "../../domain/models/Product"
import { ProductRepositoy } from '../../domain/repositories/product.repository'

const API_URL = process.env.API_URL

export const productRepository: ProductRepositoy = {
    getProducts: async (query: string) => {
        const searchResult = await http.get<SearchDTO>(`${API_URL}/search?q=${query}`)
        const products: Product[] = searchResult.results.map((result) => ({
            id: result.id,
            title: result.title,
            price: {
                amount: result.price,
                currency: result.currency_id,
                decimals: 0,
            },
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping,
        }))
        const filterCategories = searchResult.available_filters.find((filter) => filter.id === 'category')?.values
        const categories = filterCategories?.sort((a, b) => b.results - a.results).map((category) => category.name )

        return { items: products, categories } ;
    }
}
