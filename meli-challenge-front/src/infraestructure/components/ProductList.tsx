import React, { FC, useEffect, useState } from 'react';
import { Product } from '../../domain/models/Product';
import { productService } from '../../domain/services/Product.service';

export const ProductListV1: FC = () => {
    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async () => {
        const result = await productService.getProducts('teclado');
        setProducts(result.items);
        console.log( result)
    }

    useEffect(() => {
        console.log('init')
        getProducts();
    },[])

    return (
        <ul>
            {products?.map((product) => (
                <li key={product.id}>
                    <p>{product.title}</p>
                </li>
            ))}
        </ul>
    )
}