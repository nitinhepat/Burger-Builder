import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div className="App">
     <Layout>
       <switch>
      
       <Route path="/checkout" component={Checkout}></Route>
       <Route path="/" exact component={BurgerBuilder}></Route>
       </switch>
       {/* <Route path="/orders" component */}
     </Layout>
    </div>
  );
}

export default App;
