import React, { FC } from 'react';
import { getCurrencySymbol } from '../../../currency/currency';

interface ProductPriceProps {
    amount: number;
    currency: string;
    children?: React.ReactNode;
}

const ProductPrice: FC<ProductPriceProps> = ({ amount, currency, children}) => {
    return (
        <span className='product-price'>
            {getCurrencySymbol(currency)} {amount.toLocaleString("es-ES")}
            {children}
        </span>
    );
};

export default ProductPrice;