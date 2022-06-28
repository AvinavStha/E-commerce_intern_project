import { ActionType } from "./ActionType"

export const increment = () => {
  return {
      type :ActionType.INCREMENT
  }
}

export const decrement = () => {
  return {
      type :ActionType.DECREMENT
  }
}

export const toggleContent = (id) => {
  return {
      type :ActionType.TOGGLECONTENT,
      payload: {id}
  }
}

export const increaseCart = (id) => {
  return {
      type :ActionType.INCREASE_CART_ITEM,
      payload: id
  }
}



