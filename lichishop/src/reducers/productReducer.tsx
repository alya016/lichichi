import { Product, ProductDispatchTypes, ProductType, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SEARCH_FAIL, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS } from '../constants/productConstants';


interface DefaultState {
    loading: Boolean,
    products: Product[]
}

const defaultState : DefaultState = {
    loading: false,
    products: [],
}

interface ProductDetaisState {
    loading: Boolean,
    product: any
}

const productDetailsState: ProductDetaisState = {
    loading: false,
    product: {}
}

interface ProductSearchState {
    loading: Boolean,
    product: Product[]
}

const productSearchState: ProductSearchState = {
    loading: false,
    product: []
}

const productReducer = (state: DefaultState = defaultState, action: ProductDispatchTypes): DefaultState => {

    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true,
                products: [], }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false,
                     products: action.payload, 
                };
        case PRODUCT_LIST_FAIL:
            return {loading: false,
                products: [],
        };
        default:
            return state;  
    }

}

const productDetailsReducer = (state: ProductDetaisState = productDetailsState, action: ProductDispatchTypes): ProductDetaisState => {

    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true,
                product: {}, 
            }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false,
                     product: action.payload, 
                };
        case PRODUCT_DETAILS_FAIL:
            return {loading: false,
                product: {},
        };
        default:
            return state;  
    }

}

const productSearchReducer = (state: ProductSearchState = productSearchState, action: ProductDispatchTypes): ProductSearchState => {

    switch(action.type){
        case PRODUCT_SEARCH_REQUEST:
            return {loading: true,
                product: []
            }
        case PRODUCT_SEARCH_SUCCESS:
            return { loading: false,
                     product: action.payload, 
                };
        case PRODUCT_SEARCH_FAIL:
            return {loading: false,
                product: []
        };
        default:
            return state;  
    }

}

export {productReducer, productDetailsReducer, productSearchReducer}