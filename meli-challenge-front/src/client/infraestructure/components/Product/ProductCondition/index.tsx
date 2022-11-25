import React, { FC } from 'react';
import { productConditions } from '../../../../domain/constanst/productConditions';
import { productCondition } from '../../../../domain/types';

interface ProductConditionProps {
    condition: string;
}

const ProductCondition:FC<ProductConditionProps> = ({ condition }) => {
    return (
        <div className='product-condition'>
            <span>{productConditions[condition as productCondition]}</span>
        </div>
    );
};

export default ProductCondition;