import React from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import './App.css';
import Nav from "../src/Component/Navbar/navbar";
import store from "./Global/redux/store";
import Buku from "./Screen/Buku";
import Home from "./Screen/Home";
import Peminjam from "./Screen/Peminjam";
import Kategori from "./Screen/Kategori";
import Peminjaman from "./Screen/Peminjaman";

function App() {
  return (
    <Provider store = {store}>
      <div>
      <Nav/>
        <Route exact path={'/'} component={Home}/> 
        <Route exact path={'/book'} component={Buku}/>
        <Route exact path={'/borrower'} component={Peminjam}/>
        <Route exact path={'/category'} component={Kategori}/>
        <Route exact path={'/borrowing'} component={Peminjaman}/>
      </div>
    </Provider> 
  );
}

export default App;