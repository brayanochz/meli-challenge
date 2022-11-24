import React, { FC } from 'react';
import { Product } from '../../../../domain/models/Product';
import ProductFreeShipping from '../ProductFreeShipping';
import ProductPrice from '../ProductPrice';
import ProductTitle from '../ProductTitle';

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    return (
        <>
            <div className='product-card'>
                <div className='product-card__img-container'>
                    <img className='' src={product.picture} alt={product.title} />
                </div>
                <div className='product-card__info-container'>
                    <div className='product-card__info-container__price'>
                        <ProductPrice currency={product.price.currency} amount={product.price.amount} >
                            <ProductFreeShipping freeShipping={product.free_shipping} />
                        </ProductPrice>
                    </div>
                    <ProductTitle title={product.title} />
                </div>
                <div className='product-card__address-container'>
                    <span className='product-card__address-container__city'>{product.address.city_name}</span>
                </div>
            </div>
        </>
    );
};

export default ProductCard;