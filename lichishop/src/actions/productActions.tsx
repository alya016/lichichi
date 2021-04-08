import { Dispatch } from "react"
import axios from "../api/axios"
import { ProductDispatchTypes, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SEARCH_FAIL, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS } from "../constants/productConstants"


export const listProduct = () => async (dispatch: Dispatch<ProductDispatchTypes>) => {
    try { 
            dispatch({type: PRODUCT_LIST_REQUEST})
            const data  = await axios.get("http://localhost:3000/products")
            dispatch({type: PRODUCT_LIST_SUCCESS, payload: data.data}) 
        }
    
    catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
        }
    }

export const detailsProduct = (productId: any) => async (dispatch: Dispatch<ProductDispatchTypes>) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
        const data = await axios.get("http://localhost:3000/products/"+productId)
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data.data})
    }
    catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message})
    }
}

export const getProduct = (productName: string) => async (dispatch: Dispatch<ProductDispatchTypes>) => {
    try {
        dispatch({type: PRODUCT_SEARCH_REQUEST})
        const data = await axios.get("http://localhost:3000/products/?prd_name="+productName)
        dispatch({type: PRODUCT_SEARCH_SUCCESS, payload: data.data})
    }
    catch(error){
        dispatch({type: PRODUCT_SEARCH_FAIL})
    }
}