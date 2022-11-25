import React, { FC } from 'react';

interface ProductImageProps {
    src: string;
    alt: string;
    title: string;
    productId: string;
}

const ProductImage:FC<ProductImageProps> = ({ src, alt, title, productId}) => {
    return (
        <div>
            <a 
                href={`/items/${productId}`}
                target="_blank"
                rel="noreferrer"
                title={title}>
                <img className='product-image' src={src} alt={alt} />
            </a>
        </div>
    );
};

export default ProductImage;