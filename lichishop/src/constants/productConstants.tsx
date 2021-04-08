import { type } from "os"

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL"

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST"
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS"
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL"

export const PRODUCT_SEARCH_REQUEST = "PRODUCT_SEARCH_REQUEST"
export const PRODUCT_SEARCH_SUCCESS = "PRODUCT_SEARCH_SUCCESS"
export const PRODUCT_SEARCH_FAIL = "PRODUCT_SEARCH_FAIL"  

export type Product = {
        id: number,
        prd_name: string,
        prd_description: string,
        prd_price: number,
        prd_img: string,
        prd_img2: string,
        category: number,
        count: number
}


export type ProductType = {
    products: Product[]
}

export interface ProductRequest {
    type: typeof PRODUCT_LIST_REQUEST
}


export interface ProductSuccess {
    type: typeof PRODUCT_LIST_SUCCESS,
    payload: Product[]
}

export interface ProductFail {
    type: typeof PRODUCT_LIST_FAIL,
    payload: ErrorEvent
}

export interface ProductDetailsRequest {
    type: typeof PRODUCT_DETAILS_REQUEST,
    payload: number
}
export interface ProductDetailsSuccess {
    type: typeof PRODUCT_DETAILS_SUCCESS,
    payload: Product
}
export interface ProductDetailsFail {
    type: typeof PRODUCT_DETAILS_FAIL,
    payload: ErrorEvent
}

export interface ProductSearchRequest {
    type: typeof PRODUCT_SEARCH_REQUEST,
}
export interface ProductSearchSuccess {
    type: typeof PRODUCT_SEARCH_SUCCESS,
    payload: Product[]
}
export interface ProductSearchFail {
    type: typeof PRODUCT_SEARCH_FAIL,
}
  
export interface LoginState {
    username: string;
    password: string;
    isLoading: boolean;
    error: string;
    isLoggedIn: boolean;
    variant: 'login' | 'forgetPassword';
  }
  
export type LoginAction =
    | { type: 'login' | 'success' | 'error' | 'logOut' }
    | { type: 'field'; fieldName: string; payload: string };


export type ProductDispatchTypes = ProductRequest | ProductSuccess| ProductFail | ProductSearchRequest | ProductSearchSuccess | ProductSearchFail | ProductDetailsRequest | ProductDetailsSuccess | ProductDetailsFail 
