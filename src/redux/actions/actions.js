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

export const addProductInfo = (id) => {
  return {
      type :ActionType.ADDPRODUCTINFO,
      payload: {id}
  }
}
