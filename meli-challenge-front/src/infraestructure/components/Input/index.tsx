import React, { FC, InputHTMLAttributes } from 'react';
import './styles.css'

interface InputProps {
    icon?: React.ReactNode;
    actionIcon?: boolean;
    action?: () => void;
}

const index:FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
    icon,
    actionIcon,
    action, 
    ...props
}) => {
    return (
        <div className='input'>
            <input className='input__field' {...props} type="text" />
            {icon && <span className='input__icon'>{icon}</span>}
        </div>
    );
};

export default index;