import React from 'react';
import '../../styles/scss/botao.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearcBar = () => {
    return(
        <>
            <div className="header__search">
                <input type="text" placeholder="O você procura?" />
                <button className="btn btn-search"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </>
    )
}

export default SearcBar;