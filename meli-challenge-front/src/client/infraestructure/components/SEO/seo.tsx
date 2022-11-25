import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
    title: string;
    description: string;
    name: string;
    type?: string;
    image?: string;
}

const SEO:FC<SEOProps> =({
    title,
    description,
    name,
    type='text/html',
    image,
}) =>{
    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='charset' content="utf-8" />
            { /* End standard metadata tags */ }
            { /* Facebook tags */ }
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image}/>
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */ }
            <link rel="Mercado Libre" href={`/Logo_ML.png`} />
        </Helmet>
    )
}

export default SEO;