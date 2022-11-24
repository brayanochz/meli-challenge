import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../../domain/models/Product';
import { productService } from '../../../domain/services/Product.service';
import Button from '../../components/button';
import ProductCondition from '../../components/Product/ProductCondition';
import ProductImage from '../../components/Product/ProductImage';
import ProductPrice from '../../components/Product/ProductPrice';
import ProductTitle from '../../components/Product/ProductTitle';

const ProductDetail = () => {

    const { id } = useParams()
    const [product, setProduct] = useState<Product>()

    const getProducts = async () => {
        const product = await productService.getProductById(id || '');
        setProduct(product);
        console.log( product)
    }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (!product) return null;

    return (
        <div className='main-container'>
            <div>Componenet breadcumb</div>
            <div className='main-container__body'>
                <div className='product-detail product-detail__container'>
                    <div className='product-detail__principal-section'>
                        <div>
                            <ProductImage
                                src={product.picture}
                                alt={product.title}
                                productId={product.id}
                                title={product.title}
                            />
                        </div>
                        <div className='product-description__container'>
                            <h2 className='product-description__title'>Descripcion del producto</h2>
                            <p className='product-description__description'>{product.description}</p>
                        </div>
                    </div>
                    <div className='product-detail__secondary-section'>
                        <ProductCondition condition={product.condition} />
                        <ProductTitle title={product.title} />
                        <ProductPrice currency={product.price.currency} amount={product.price.amount} />
                        <Button>Comprar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;