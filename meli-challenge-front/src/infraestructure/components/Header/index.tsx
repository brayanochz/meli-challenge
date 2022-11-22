import MELILogo from '../../../assets/logo.png'
import Input from '../Input'
import SearchIcon from '../../../assets/icon/search.svg';
import './styles.css';

const Header = () => {
    return (
        <div className="header">
            <img src={MELILogo} alt="Mercado libre" />
            <Input icon={<img src={SearchIcon} alt="icon"/>} />
        </div>
    );
};

export default Header;