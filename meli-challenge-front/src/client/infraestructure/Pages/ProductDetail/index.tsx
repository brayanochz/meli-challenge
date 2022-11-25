import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../../domain/models/Product';
import { productService } from '../../../domain/services/Product.service';
import Button from '../../components/button';
import ProductCondition from '../../components/Product/ProductCondition';
import ProductImage from '../../components/Product/ProductImage';
import ProductPrice from '../../components/Product/ProductPrice';
import ProductTitle from '../../components/Product/ProductTitle';
import { useSSE } from "use-sse";
import SEO from '../../components/SEO/seo';

const ProductDetail = () => {

    const { id } = useParams()

    const [data, error] = useSSE<Product>(() => {
        return productService.getProductById(id || '');
    }, []);

    if (error) return <p>{JSON.stringify(error)}</p>

    if (!data) return null;

    console.log(data)

    return (
        <div className='main-container'>
            <SEO
                title={data.title}
                description={data.description || ''}
                name={data.title}
                image={data.picture}
            />
            <div className='main-container__body'>
                <div className='product-detail product-detail__container'>
                    <div className='product-detail__principal-section'>
                        <div>
                            <ProductImage
                                src={data.picture}
                                alt={data.title}
                                productId={data.id}
                                title={data.title}
                            />
                        </div>
                        <div className='product-description__container'>
                            <h2 className='product-description__title'>Descripcion del producto</h2>
                            <p className='product-description__description'>{data.description}</p>
                        </div>
                    </div>
                    <div className='product-detail__secondary-section'>
                        <ProductCondition condition={data.condition} />
                        <ProductTitle title={data.title} />
                        {data?.price && <ProductPrice currency={data.price?.currency} amount={data.price?.amount} />}
                        <Button>Comprar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;