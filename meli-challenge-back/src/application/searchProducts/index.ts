import { Request, Response } from "express";
import { productService } from "../../domain/services/Product.service";

export const SearchProducts = async (req: Request, res: Response) => {
    const { q: query } = req.query

    try {
        const searchResult =  await productService.getProducts(query as string)
        res.send(JSON.stringify(searchResult))
    } catch (error: any) {
        console.log(error)
        res.send(error.response)
    }
}