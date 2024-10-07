import { useEffect, useState } from "react";
import Useshop from "../shopcontext";

const Product=({product})=> {

const {addTocart,products,RemoveFromcart}=Useshop();  
const [isIncart,setIsincart]=useState(false);

useEffect(()=>{
const  isCart= products.filter(p => p.id ===product.id);
if(isCart.length > 0){
  setIsincart(true);
}
else{
  setIsincart(false)
}
},[products]);

  const ADDTOCART=()=>{
    if(isIncart){
      RemoveFromcart(product);
  
    }
 else{
  addTocart(product);

 }
  }
  return (
    <div className="card" 
    style={{minHeight:"100%", background:`Linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url(${product.urlImage})`, backgroundSize:"cover",backgroundRepeat:"no-repeat"}}
    >
      <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
      <button className={`btn ${isIncart? "btn-secondary":"btn-primary"}`} onClick={ADDTOCART}>
       {isIncart? "-" :"+"}
        </button>
    </div>
  )
}

export default Product;