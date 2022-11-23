import MELILogo from '../../../assets/logo.png'
import SearchInput from '../SearchInput';


const Header = () => {
    return (
        <div className="header">
            <div className='header__body'>
                <img src={MELILogo} alt="Mercado libre" />
                <SearchInput />
            </div>
        </div>
    );
};

export default Header;