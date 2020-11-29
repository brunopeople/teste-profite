import React from 'react';
import './estilo/css/App.css';
import Banner from './components/Banner/Banner';
import Headers from './components/Cabecalho/Cabecalho';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      carItens: 0
    }

    this.countCar = this.countCar.bind(this);

  }

  countCar() {

    this.setState({
      carItens: (this.state.carItens + 1)
    })

  }

  //function App() {
  render() {

    return (
      <div className="">
        <Headers car={this.state.carItens} />
        <Appcontent countCar={this.countCar} />
        <Footer />
      </div>
    );
  }
}
