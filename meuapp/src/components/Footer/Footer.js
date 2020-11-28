import React from 'react';
import logoProfite from '../../imagens/profite-footer.svg';
import logoVtex from '../../imagens/vtex-footer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import '../../styles/scss/botao.scss';
import {faEnvelope, faHeadset} from '@fortawesome/free-solid-svg-icons';

export const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__components">
                <div className="footer__components--item">
                    <div className="row">
                        <div className="column">
                            <h2>Localização</h2>
                            <strong>São Paulo</strong>
                            <p>Rua do Rócio, 423/1801</p>
                            <p>Vila Olímpia - SP</p>
                            <p>04552-000</p>
                            <p>+55 11 3333 3333</p>
                        </div>
                        <div className="column">
                            <div className="footer__components-item">
                                <strong>Rio de Janeiro</strong>
                                <p>Vol. da Pátria, 301/702</p>
                                <p>Botafogo - RJ</p>
                                <p>22270-000</p>
                                <p>+55 21 3333 3333</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__components--item buttons">
                    <Button id='footer__button'element={<FontAwesomeIcon icon={faEnvelope}/>} value="Entre em Contato" />
                    <Button id='footer__button' element={<FontAwesomeIcon icon={faHeadset} />} value="Fale com o nosso Consultor Online" />
                </div>

                <div className="footer__components--item company">
                    <div className='row'>
                        <div className='columns'>
                            <small>Create By</small>
                            <img src={logoProfite} alt="Create By Profite" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;