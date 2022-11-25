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
                name="search"
                id="search"
            />
            {icon && <button type={"submit"} onClick={handleClick} className='input__icon'>{icon}</button>}
        </div>
    );
};

export default Input;