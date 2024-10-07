import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/contact';
import Cart from "./component/pages/Cart";
import { useState } from "react";
import { Toaster } from "react-hot-toast";


const App=()=>{
    const [cart,setcart]=useState();

    
    return <div className="container">
    <Toaster />
    <Header cart={cart} setcart={setcart}/>
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/Contact"  element={<Contact/>}/>
    <Route path="/About"  element={<About/>}/>
    <Route path="/Cart"  element={<Cart setcart={setcart}/>}/>
    </Routes>
    </div>
}

export default App;