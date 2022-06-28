import { ActionType } from "../actions/ActionType";

const initialState = {
    count : 1,
    index : 1,
}

export const incrementDecrement = (state = initialState ,actions)=>{
    switch (actions.type) {
        case ActionType.INCREMENT:
            return {
                count : state.count+1
            }

        case ActionType.DECREMENT:
            return {
                count : state.count-1
            }

        case ActionType.TOGGLECONTENT:
            const {id} = actions.payload 
            return {
                index :  id
            }

        case ActionType.INCREASE_CART_ITEM:
            return {
                index: state.index+1,
                count:1
            }
    
    
        default:
            return state;
    }
}