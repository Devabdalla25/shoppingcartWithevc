import Useshop from "../../shopcontext";
import Payments from "../Payments";
import ProductsCart from "../ProductsCart";


const Cart=()=>{
  const {products} =Useshop();
  if (products.length <=0)
    return <h1>the cart is Empty please select the product</h1>
  return (
    <div className="cart-container">
      <ProductsCart />
      <Payments />
    </div>
  );

}

export default Cart;