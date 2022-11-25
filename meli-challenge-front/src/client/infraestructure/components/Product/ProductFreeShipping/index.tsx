import React, { FC } from 'react';

interface FreeShippingProps {
    freeShipping: boolean;
}

const ProductFreeShipping: FC<FreeShippingProps> = ({ freeShipping = false }) => {
    if (!freeShipping) return null;

    return (
        <div className='product-free-shipping'>
            <img className='product-free-shipping__img' src="/ic_shipping.png" alt="free_shipping" />
        </div>
    );
};

export default ProductFreeShipping;