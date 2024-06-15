import '../assets/header.css';
import logo from '../logo.svg';

function Header() {
    return (
        <>
            <header className="header">
                <img src={logo} className="header-logo" alt="logo" />
                Hunter Mayo
            </header>
      </>
    );
}

export default Header;