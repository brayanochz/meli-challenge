import React, { useEffect, useState } from 'react';
import { useQuery } from '../../../domain/hooks/useQuery';
import { Product } from '../../../domain/models/Product';
import { productService } from '../../../domain/services/Product.service';
import ProductCard from '../../components/Product/ProductCard';

const ProductList = () => {

    const query = useQuery()
    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async () => {
        const result = await productService.getProducts(query.get('search') || '');
        setProducts(result.items);
        console.log( result)
    }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='main-container'>
            <div>Componenet breadcumb</div>
            <div className='main-container__body'>
                {products?.map((product) => (
                    <ProductCard key={`product-${product.id}`} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;