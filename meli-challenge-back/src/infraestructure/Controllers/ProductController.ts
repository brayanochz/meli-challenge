import { Request, Response } from "express"
import { GetProductById } from "../../application/GetProduct"
import { SearchProducts } from "../../application/SearchProducts"

const SearchProductsController = async (req: Request, res: Response) => {
    const { q: query } = req.query

    try {
        const searchResult =  await SearchProducts(query as string)
        res.send(JSON.stringify(searchResult))
    } catch (error: any) {
        console.log(error)
        res.send(error.response)
    }
}

const GetProductByIdController = async (req: Request, res: Response) => {
    const { id: ProductId } = req.params

    try {
        const searchResult =  await GetProductById(ProductId)
        res.send(JSON.stringify(searchResult))
    } catch (error: any) {
        console.log(error)
        res.send(error.response)
    }
}

export const ProductController = {
    SearchProducts: SearchProductsController,
    GetProductById: GetProductByIdController,
}
