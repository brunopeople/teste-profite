import React from 'react';
import PropTypes from 'prop-types';

const Produtos = ({ catalago, countCar}) => {
  const { id, codigo_produto, nome, avaliacao, preco, desconto, vendas} = catalago;
  
  return(
    <div id={`card-${id}`} className="card">
      <div className='itens_cols'>
        <img src={require(`../../JSON/imgs/${codigo_produto}.png`)} alt='tenis' />
        <p><label className='lbdesc'>{nome}</label></p>
        <p><img src={require(`../../JSON/imgs/${avaliacao}`)} className='stars' alt='avaliacao' /></p>
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
      <img src={require(`../../JSON/imgs/off.png`)} alt='off' />
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

