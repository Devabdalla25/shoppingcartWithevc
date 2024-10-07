import { Link } from "react-router-dom";
import "../style.css";
import Useshop from "../shopcontext";
const  Header=()=> {
 const {products}= Useshop()
  return (
    <div className="menu">
        <div className="logo">reactfy</div>
        <div className="Links">
            <Link to="/">Home</Link>
            <Link to="/contact">contact</Link>
         
            <Link to="/Cart">Cart</Link>
        </div>
        <Link className="cart"><span>{products.length}</span></Link>
    </div>
  )
}

export default Header;