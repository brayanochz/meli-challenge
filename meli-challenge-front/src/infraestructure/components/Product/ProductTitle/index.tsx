import React, { FC } from 'react';

interface ProductTitleProps {
    title: string;
    onClick?: () => void;
}

const ProductTitle: FC<ProductTitleProps> = ({ title, onClick}) => {
    return (
        <div className='product-title__container'>
            <h2 className='product-title__content' onClick={onClick}>
                {title}
            </h2>
        </div>
    );
};

export default ProductTitle;