import { productService } from "../Service/Product.service";

export const GetProductById = async (ProductId: string) => {
    try {
        const product =  await productService.getProductById(ProductId)
        return product;
    } catch (error: any) {
        console.log(error)
        throw new Error(error.message);
    }
}

