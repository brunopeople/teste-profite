import React from 'react';
import { ProdutoData } from "./../../data";
import avaliacao  from '../../imagens/rating.svg';
import Slider from "react-slick";
import Buttons from '../../components/Button/Button';

const Produto = () => {
    const configuracao ={
        dots: false,
        infinite: true,
        speed: 700,
        slideToShow: 4,
        slidesToScroll: 4,
        responsive:[
            {
                breakpoint: 992,
                configuracao:{
                    slideToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                configuracao: {
                    slideToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }
            
        ]
    };

    return (
        <>
          <div className="estante">
          <div className="estante__container">
          <h2>Produtos</h2>
          <Slider {...configuracao}>
            {stockData.map((data, index) => {
              return (
                <div key={index} className="estante__caixa">
                  <div className="estante__bandeiras">
                    <span className="bandeiras">{data.promocao}</span>
                  </div>
    
                  <span className="estante__imagem">
                    <img src={data.foto} alt="Imagem do produto"/>
                  </span>
    
                  <span className="estante__estrelas">
                    <img src={avaliacao} alt="Avaliação"/>
                  </span>
    
                  <span className="estante__titulo">
                    {data.titulo}
                  </span>
                  <span className="estante__preço-velho">
                    {data.precoVelho}
                  </span>
                  <span className="estante__novo-preco">
                  {data.precoDesconto}
                  </span>
                  <span className="estante__parcelas">
                    {data.parcelas}
                  </span>
                    <Buttons id='estante__botao' value={data.button}></Buttons>
                </div>
              );
            })}
            </Slider>
          </div>
          </div>
        </>
      )
    }
    
    export default Produto;