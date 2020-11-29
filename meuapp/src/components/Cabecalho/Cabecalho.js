import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../imagens/logo.png';
import usuario from '../../imagens/user.png';
import mercado from '../../imagens/br.png';
import brasil from '../../imagens/br.png';
import esp from '../../imagens/esp.png';
import eng from '../../imagens/en.png';

const Cabecalho = ({ car }) => (
    <header>
        <div className='header-content'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <input type="checkbox" id="control-nav" hidden />
            <label htmlFor="control-nav" className="control-nav"></label>
            <label htmlFor="control-nav" className="control-nav-close"></label>
            <nav className='nav-itens'>
                <ul>
                    <li>
                        <label>Logar</label>
                    </li>

                    <li>
                        <label>Carrinho</label>
                    </li>

                    <li>
                        <label>Português</label>
                    </li>

                    <li>
                        <label>Espanhol</label>
                    </li>

                    <li>
                        <label>Inglês</label>
                    </li>
                </ul>
            </nav>
            <div className='search'>
                <input type='text' placeholder='O que você estpa procurando?' />
            </div>

            <div className='account'>
                <div className='account-user'>
                    <img src={user} alt='user' />
                </div>
                <div className='aacount-name'>
                    <label>Minha Conta</label>
                </div>
            </div>

            <div className='market'>
                <div className='market-img'><img src={mercado} alt='carrinho' /></div>
                <div className='market-num'><span className='car-number'>{car}</span></div>
            </div>

            <div className='language'>
                <img src={bra} alt= 'pt-br' />
                <img src={esp} alt= 'es' />
                <img src={eng} alt= 'en' />
            </div>
        </div>
    </header>
);

Cabecalho.PropTypes = {
    car: PropTypes.number
}

export default Cabecalho