import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import { ProductsList } from "./views/Products";
import { Product } from "./views/Product";
import { Store } from "./store";
import { Cart } from "./views/Cart";
import { PageHeader } from "./components/PageHeader";

function App() {
  return (
    <Provider store={Store}>
      <div id="main">       
        <BrowserRouter>
          <PageHeader id="main-pageheader" title={ "Amazing Store" } />
          <div id="main-app">    
            <Route exact path="/" component={ProductsList} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
