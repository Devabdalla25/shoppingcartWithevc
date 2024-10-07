export const InitialState={
    products:[],
    total:0,
};


const shopReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "ADD_TO_CART":
            return{
                ...state,
                products:payload.products,
            };
        case "REMOVE_FROM_CART":
            return{
                ...state,
                products:payload.products,
            };
            case "CALCULATE_TOTAL_PRICE":
                return{
                    ...state,
                    total:payload,
                };
                case "CLEAR_TO_CART":
                    return InitialState;
            default:
                throw new Error("unknown reducer");


                
    };
};

export default shopReducer;