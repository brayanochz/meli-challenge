import React, { useEffect, useState } from 'react';
import { useQuery } from '../../../domain/hooks/useQuery';
import { Product } from '../../../domain/models/Product';
import { productService } from '../../../domain/services/Product.service';
import ProductCard from '../../components/Product/ProductCard';
import SEO from '../../components/SEO/seo';
import { useSSE } from "use-sse";
import { Search } from '../../../domain/models/Search';

const ProductList = () => {

    const query = useQuery()
    console.log(JSON.stringify({query, s: query.get('search')}));

    const [data, error] = useSSE<Search>(() => {
        return productService.getProducts(query.get('search') || '');
    }, []);

    if (error) return <p>{JSON.stringify(error)}</p>

    if (!data) return null;

    console.log(JSON.stringify(data));

    return (
        <div className='main-container'>
            <SEO
                title={`${query.get('search')} | MercadoLibre 📦`}
                description={query.get('search') || 'Mercado Libre'}
                name={'Mercado Libre'}
            />
            <div className='main-container__body'>
                {data?.items?.map((product) => (
                    <ProductCard key={`product-${product.id}`} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;