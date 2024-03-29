import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import Header from "./containers/Header";
import './App.css'

export default function App() {
    return (
      <div className="">
        <Router>
          <Header />
          <Routes>
          <Route path="/" exact element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route>404 Not Found!</Route>
          </Routes>           
          
        </Router>
      </div>
    );
  }