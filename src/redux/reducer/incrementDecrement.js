import { ActionType } from "../actions/ActionType";

const initialState = 1

export const incrementDecrement = (state = initialState ,actions)=>{
    switch (actions.type) {
        case ActionType.INCREMENT:
            return state+1;

        case ActionType.DECREMENT:
            return state-1;
    
        default:
            return state;
    }
}