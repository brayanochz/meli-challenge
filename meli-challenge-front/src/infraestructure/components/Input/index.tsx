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
    value = "",
    onChange,
    ...props
}) => {

    const handleClick = () => {
        action && action();
    }

    return (
        <div className='input'>
            <input
                value={value}
                onChange={onChange}
                className='input__field' 
                {...props}
                type="text"
            />
            {icon && <span onClick={handleClick} className='input__icon'>{icon}</span>}
        </div>
    );
};

export default Input;