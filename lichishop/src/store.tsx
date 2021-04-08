import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import {productReducer, productDetailsReducer, productSearchReducer} from './reducers/productReducer';
import {composeWithDevTools} from "redux-devtools-extension"



const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    productSearch: productSearchReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootStore = ReturnType<typeof reducer>

export default store;