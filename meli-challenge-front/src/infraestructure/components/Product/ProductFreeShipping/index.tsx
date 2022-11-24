import React, { FC } from 'react';
import FreeShippingIcon from '../../../../assets/ic_shipping.png'

interface FreeShippingProps {
    freeShipping: boolean;
}

const ProductFreeShipping: FC<FreeShippingProps> = ({ freeShipping = false }) => {
    if (!freeShipping) return null;

    return (
        <div className='product-free-shipping'>
            <img className='product-free-shipping__img' src={FreeShippingIcon} alt="free_shipping" />
        </div>
    );
};

export default ProductFreeShipping;