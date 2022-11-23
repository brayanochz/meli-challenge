import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps {
    icon?: React.ReactNode;
    actionIcon?: boolean;
    action?: () => void;
}

const Input:FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
    icon,
    actionIcon,
    action, 
    ...props
}) => {

    const handleClick = () => {
        action && action();
    }

    return (
        <div className='input'>
            <input className='input__field' {...props} type="text" />
            {icon && <span onClick={handleClick} className='input__icon'>{icon}</span>}
        </div>
    );
};

export default Input;