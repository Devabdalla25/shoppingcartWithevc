import { InitialState } from "./ShopReducer";
import { createContext, useContext, useReducer } from "react";
import shopReducer from "./ShopReducer";


const Shopcontext =createContext(InitialState);

export  const ShopProvider=({children})=>{

    const [state,dispatch]=useReducer(shopReducer,InitialState);
    const addTocart=(product)=>{
        const Updated=state.products.concat(product);
        CalculateTotal(Updated);
    dispatch({
        type:"ADD_TO_CART",
        payload:{
            products:Updated,
        },
    });
    };

    const RemoveFromcart=(product)=>{
        const updatedcart=state.products.filter(p => p.id !==product.id);
        CalculateTotal(updatedcart);
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:updatedcart                
            }
        })
    };
    const CalculateTotal=(products)=>{
        let total=0;
        products.forEach(pro =>{
            total +=pro.price;
        });
        dispatch({
            type:"CALCULATE_TOTAL_PRICE",
            payload:total
        });
    };

    const ClearCart=(products)=>{

        dispatch({
            type:"CLEAR_TO_CART",
            payload:InitialState,
        })
    }
    
const values={
    products:state.products,
    total:state.total,
    addTocart,
    RemoveFromcart,
    ClearCart
};
  return <Shopcontext.Provider value={values} >
            {children}
  </Shopcontext.Provider>  
};

const Useshop=()=>{
    const context =useContext(Shopcontext);
    if(context === undefined){
        throw new Error ("invalid context");
    }
    return context;
}

export default Useshop;