import { ActionType } from "../actions/ActionType";

const initialState = {
    product_details :[],
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

        case ActionType.ADD_PRODUCT:
        case ActionType.REMOVE_PRODUCT:
            return {
                ...state,
                loading:true,
            }

        case ActionType.ADD_PRODUCT_SUCCESS:
        case ActionType.REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        
        case ActionType.ADD_PRODUCT_FAIL:
        case ActionType.REMOVE_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error: actions.payload 
            }

        // case ActionType.REMOVE_PRODUCT:
        //     return {
        //         index :  id
        //     }
    
        // case ActionType.REMOVE_PRODUCT_SUCCESS:
        //     return {
        //         index :  id
        //     }

        // case ActionType.EDIT_PRODUCT:
        //     return {
        //         index :  id
        //     }

        // case ActionType.EDIT_PRODUCT_SUCCESS:
        //     const {id} = actions.payload 
        //     return {
        //         index :  id
        //     }

        default:
            return state;
    }
}