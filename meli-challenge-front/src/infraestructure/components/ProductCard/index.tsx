import React, { FC } from 'react';
import { Product } from '../../../domain/models/Product';
import getSymbolFromCurrency from 'currency-symbol-map'

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
                    <p>{getSymbolFromCurrency(product.price.currency)} {product.price.amount}</p>
                    <p>{product.title}</p>
                    <p>{product.condition}</p>
                </div>
            </div>
        </>
    );
};

export default ProductCard;