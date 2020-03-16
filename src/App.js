import React from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { setLikedProducts } from './actions';

import ProductCardContainer from './Components/ProductCardContainer/ProductCardContainer';

function App({ setLikedProducts }) {

  setLikedProducts();

  return (
    <div className="App">
      <ProductCardContainer />
    </div>
  );
}

const mapDispatchToProps = () => {
  return {
    setLikedProducts
  }
}

export default connect(null , mapDispatchToProps())(App);

