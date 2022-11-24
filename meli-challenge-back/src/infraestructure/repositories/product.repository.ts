import { http } from  '../Http/http'
import { SearchDTO } from "../Http/dto/SearchDTO"
import { Product } from "../../Domain/Models/Product"
import { ProductRepositoy } from '../../Domain/Repositories/Product.repository'
import { ItemDTO } from '../Http/dto/ItemDTO'
import { ItemDescriptionDTO } from '../Http/dto/ItemDescriptionDTO'

const API_SEARCH_URL = process.env.API_SEARCH_URL
const API_ITEMS_URL = process.env.API_ITEMS_URL

export const productRepository: ProductRepositoy = {
    getProducts: async (query: string) => {
        const searchResult = await http.get<SearchDTO>(`${API_SEARCH_URL}?q=${query}`)
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
            address: result.address,
        }))
        const filterCategories = searchResult.available_filters.find((filter) => filter.id === 'category')?.values
        const categories = filterCategories?.sort((a, b) => b.results - a.results).map((category) => category.name ) || []

        return { items: products, categories }
    },
    getProductById: async (productId: string) => {
        const itemResult = await http.get<ItemDTO>(`${API_ITEMS_URL}/${productId}`)
        const itemDescriptionResult = await http.get<ItemDescriptionDTO>(`${API_ITEMS_URL}/${productId}/description`)
        const product: Product = {
            id: productId,
            title: itemResult.title,
            price: {
                amount: itemResult.price,
                currency: itemResult.currency_id,
                decimals: 0,
            },
            picture: itemResult.pictures[0].secure_url,
            condition: itemResult.condition,
            free_shipping: itemResult.shipping.free_shipping,
            description: itemDescriptionResult.plain_text,
        }

        return product
    }
}
