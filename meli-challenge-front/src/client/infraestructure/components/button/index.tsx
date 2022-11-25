import React, { FC, HTMLAttributes } from 'react';


const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
        <button className='custom-button'>
            {children}
        </button>
    );
};

export default Button;