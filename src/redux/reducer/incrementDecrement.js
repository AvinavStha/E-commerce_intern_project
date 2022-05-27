import { ActionType } from "../actions/ActionType";

const initialState = {
    count : 1,
    index : 0,
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
    
        default:
            return state;
    }
}