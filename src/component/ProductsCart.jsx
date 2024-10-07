import Useshop from "../shopcontext";

const ProductsCart =()=>{

  const {products,RemoveFromcart,total}=  Useshop();

    return (
        <div className="cart-products">
            <h2>the cart product</h2>
            {
                products.map((product)=>(
                    <div className="cart-product">
                        <div className="cart-title-img">
                            <img src={product.urlImage} alt=""  />
                            <span>{product.name}</span>
                        </div>
                        <h4>${product.price}</h4>
                        <button  className="reset"type="reset" onClick={()=> RemoveFromcart(product)}>reset</button>
                    </div>
                ))

                
            };
            <dic className="total-price">the total is :${total} </dic>
        </div>
    );
}


export default ProductsCart;