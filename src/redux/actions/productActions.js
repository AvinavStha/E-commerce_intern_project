import { ActionType } from "./ActionType"
import {firestore_db} from '../../firebase'
import { doc,getDocs, collection, setDoc, deleteDoc } from "firebase/firestore"

const getProductStart = () => ({
    type :ActionType.GET_PRODUCT,
})

const getProductSuccess = (products) => ({
    type :ActionType.GET_PRODUCT_SUCCESS,
    payload: products
})

const getProductFailed = () => ({
    type :ActionType.GET_PRODUCT_FAIL
})

const addProductStart = () => ({
    type :ActionType.ADD_PRODUCT
})

const addProductSuccess = () => ({
    type :ActionType.ADD_PRODUCT_SUCCESS
})

const addProductFailed = () => ({
    type :ActionType.ADD_PRODUCT_FAIL
})

const deleteProductStart = () => ({
    type :ActionType.REMOVE_PRODUCT
})

const deleteProductSuccess = () => ({
    type :ActionType.REMOVE_PRODUCT_SUCCESS
})

const deleteProductFailed = () => ({
    type :ActionType.REMOVE_PRODUCT_FAIL
})

export const getProduct = ()=> async (dispatch)=>{
    dispatch(getProductStart())
    
    const getProducts = await getDocs(collection(firestore_db, "products"))
    // const product = getProducts.docs.map(doc=>doc.data())  
    const product = []
    getProducts.forEach((doc)=>{
        product.push({...doc.data(),id:doc.id})
    })
    try {
        if(product){
            dispatch(getProductSuccess(product))
        }
        else{
            dispatch(getProductSuccess({}))
        } 
    } catch (error) {
        dispatch(getProductFailed(error))
    }

}

export const addProduct = (product)=> async (dispatch)=>{
    dispatch(addProductStart())

    const addProduct = await setDoc(doc(firestore_db,"products",`${Date.now()}`)
                        ,product,{merge:true,})
    try {
        dispatch(addProductSuccess(addProduct))
    } catch (error) {
        dispatch(addProductFailed(error))
    }
}

export const deleteProduct = (id)=> async (dispatch)=>{
    dispatch(deleteProductStart())

    const deleteProduct = await deleteDoc(doc(firestore_db,"products",`${id}`))
    try {
        dispatch(deleteProductSuccess(deleteProduct))
    } catch (error) {
        dispatch(deleteProductFailed(error))
    }
}

export const editProduct = (id,updates) => {
    return {
        type :ActionType.EDIT_PRODUCT,
        payload: {id,updates}
    }
}

export const editProductSuccess = (updates) => {
    return {
        type :ActionType.EDIT_PRODUCT_SUCCESS,
        payload: {updates}
    }
}