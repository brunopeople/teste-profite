import React from 'react';
import logo from '../../imagens/logo.svg';
import carrinho from '../../imagens/cart.svg';
import Bandeiras from '../../imagens/flags.svg';
import SearchBar from './SearchBar';
import '../../styles/scss/button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <>
            <header className="header">
                <ul className="header__components">
                    <li className="menu"><FontAwesomeIcon icon={faBars}/></li>
                    <li className="logo"><img src={logo} className="header__logo" alt="logo" /></li>
                    <li className="search"><SearchBar/></li>
                    <ul className="header__group">
                        <li className="account"><FontAwesomeIcon icon={faUserCircle}/><span>Minha Conta</span></li>
                        <li className="cart"><img src={cart} alt="carrinho de compras" /> <span>1</span></li>
                        <li className="separator"><span></span></li>
                        <li className="flags"><img src={flags} alt="idiomas" /></li>
                    </ul>
                </ul>
            </header>
        </>
    )
}

export default Header;