import React from 'react';
import ProductList from './components/ProductList'
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ProductList />
          </div>
          <div className="col-md-6">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
