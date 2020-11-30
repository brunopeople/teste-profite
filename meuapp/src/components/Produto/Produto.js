import React from 'react';
import PropTypes from 'prop-types';

const Produtos = ({ catalogo, countCar}) => {
  const { id, codigo, nome, avaliacao, preco, desconto, vendas} = catalogo;
  
  return(
    <div id={`card-${id}`} className="card">
      <div className='itens_cols'>
        <img src={require(`../../API/imagens/${codigo}.png`)} alt='tenis' />
        <p><label className='lbdesc'>{nome}</label></p>
        <p><img src={require(`../../API/imagens/${avaliacao}.png`)} className='stars' alt='avaliacao' /></p>
        <p style={{ 'height': '19px'}}><label className='priceIni'>{vendas === 1 ? `de ${moeda(preco)}` : ''}</label></p>
        <p><label className='parclb'>ou em 3x de ${moeda((preco - desconto) / 3)}</label></p>
        <p><button className='btn' onClick={countCar}>COMPRAR</button></p>
      </div>
      {vendas ===1 && OFF()}
    </div>
  )
}

function OFF(props){
  return(
    <div className='itens-off'>
      <img src={require(`../../API/imagens/off.png`)} alt='off' />
    </div>
  );
}

function moeda(valor){
  return valor.toLocaleString('pt-br', {style: 'currency' , currency: 'BRL'});
}

Produtos.propTypes = {
  countCar: PropTypes.func.isRequired
}

export default Produtos;

