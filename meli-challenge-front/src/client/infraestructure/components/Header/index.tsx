import React from 'react';
import SearchInput from '../SearchInput';


const Header = () => {
    return (
        <div className="header">
            <div className='header__body'>
                <img src="/Logo_ML.png" alt="Mercado libre" />
                <SearchInput />
            </div>
        </div>
    );
};

export default Header;