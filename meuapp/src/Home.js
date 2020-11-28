import React from 'react';
import Header from './components/Cabecalho/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Produto from './components/Produto/Produto';
import './styles/scss/index.scss';

const Home = () => {
    return(
        <>
            <Header />
            <Banner />
            <Produto />
            <Produto />
        </>
    )
}

export default Home;