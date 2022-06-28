import { ActionType } from "../actions/ActionType";

const initialState = {
    product_details :[],
    single_product:{},
    cart_item:[],
    loading:false,
    error:null
}

export const productReducer = (state = initialState ,actions)=>{
    switch (actions.type) {
        case ActionType.GET_PRODUCT:
            return{
                ...state,
                loading:true
            }
        
        case ActionType.GET_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                product_details: actions.payload
            }
        
        case ActionType.GET_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error: actions.payload 
            }

        case ActionType.GET_SINGLE_PRODUCT:
            return{
                ...state,
                loading:true
            }
            
        case ActionType.GET_SINGLE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                single_product: actions.payload
            }
            
        case ActionType.GET_SINGLE_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error: actions.payload 
            }

        case ActionType.ADD_PRODUCT:
        case ActionType.REMOVE_PRODUCT:
        case ActionType.EDIT_PRODUCT:
            return {
                ...state,
                loading:true,
            }

        case ActionType.ADD_PRODUCT_SUCCESS:
        case ActionType.REMOVE_PRODUCT_SUCCESS:
        case ActionType.EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        
        case ActionType.ADD_PRODUCT_FAIL:
        case ActionType.REMOVE_PRODUCT_FAIL:
        case ActionType.EDIT_PRODUCT_FAILED:
            return{
                ...state,
                loading:false,
                error: actions.payload 
            }

        case ActionType.ITEM_TO_CART:
            return{
                ...state,
                loading:false,
                cart_item: actions.payload    
            }

        default:
            return state;
    }
}