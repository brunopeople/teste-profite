import React from 'react';
import logo from '../../imagens/logo.svg';
import Carrinho from '../../imagens/cart.svg';
import Bandeiras from '../../imagens/flags.svg';
import SearchBar from './SearchBar';
import '../../styles/scss/botao.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <>
            <header className="cabecalho">
                <ul className="cabecalho__componentes">
                    <li className="menu"><FontAwesomeIcon icon={faBars}/></li>
                    <li className="logo"><img src={logo} className="cabecalho__logo" alt="logo" /></li>
                    <li className="barra_pesquisa"><SearchBar/></li>
                    <ul className="cabecalho__group">
                        <li className="conta"><FontAwesomeIcon icon={faUserCircle}/><span>Minha Conta</span></li>
                        <li className="carrinho"><img src={Carrinho} alt="carrinho de compras" /> <span>1</span></li>
                        <li className="separator"><span></span></li>
                        <li className="bandeiras"><img src={Bandeiras} alt="idiomas" /></li>
                    </ul>
                </ul>
            </header>
        </>
    )
}

export default Header;