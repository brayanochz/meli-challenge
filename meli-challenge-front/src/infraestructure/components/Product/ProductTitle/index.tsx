import React, { FC } from 'react';

interface ProductTitleProps {
    title: string;
    productId?: string;
    onClick?: () => void;
}

const ProductTitle: FC<ProductTitleProps> = ({ title, productId, onClick}) => {
    return (
        <div className='product-title__container'>
            <a 
                href={`/items/${productId}`}
                target="_blank"
                rel="noreferrer"
                title={title}>
                <h2 className='product-title__content' onClick={onClick}>
                    {title}
                </h2>
            </a>
        </div>
    );
};

export default ProductTitle;