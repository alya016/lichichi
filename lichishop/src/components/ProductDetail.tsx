import React, { ReactElement,useEffect,useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import 'react-medium-image-zoom/dist/styles.css'
import productDetail from "../styles/ProductDetails.module.css"
import axios from "../api/axios"
import Comments from './Comments'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../store'
import { detailsProduct } from '../actions/productActions'
import ErrorBoundary from './ErrorBoundary'

export default function ProductDetail(): ReactElement {

    const match = useRouteMatch<{prodId: any}>()
    const productID = match.params.prodId;
    const [bag, setBag] = useState<any[]>([])
    const [count, setCount] = useState(0);

    const productDetailsState = useSelector((state: RootStore) => state.productDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const basket = await axios.get("http://localhost:3000/cart")
            console.log(basket.data)
            setBag([... basket.data])
        }
        dispatch(detailsProduct(productID))
        fetchData();
    }, []);

    const item = productDetailsState.product

    async function addToCart(id: number, name: string, description: string, price: number, img: string, img2: string, category: number, count: number) {

        if(bag){
            const checker = bag.find((b) => b.id == id) 
            if(checker){
                alert("No")
                return;
            }
        }
        
        const model = {
            id: id, 
            prd_name: name, 
            prd_description: description, 
            prd_price: price,
            prd_img: img,
            prd_img2: img2,
            category: category,
            count: count
        }

        const result = axios.post("http://localhost:3000/cart", model);   
        alert("Product is added!")
        window.location.reload();   
    }

    

    const increase = React.useCallback(() => {
        setCount(count => count + 1)
        }, [count])


    const decrease = React.useCallback(() => {
        setCount(count => count === 0 ? count = 0 : count - 1)
        }, [count])
    

    return (
        <div id = {productDetail.productDetails}>
            {
              
                <div className = {productDetail.details} key = {item.id}>
                    <img src={item.prd_img} className={productDetail.image} style={{ width: "25em"}}/>
                    <div className={productDetail.box}>
                        <div className={productDetail.row}>
                            <h3>DESIGNED IN GERMANY</h3>
                            <h2>{item.prd_name}</h2>
                            <h3>${item.prd_price}.00</h3>
                            <button className = {productDetail.btn} style = {{marginLeft: "100px", marginBottom: "-10px"}} onClick = {() => decrease()}>-</button>
                            <h3>{count}</h3>
                            <button className = {productDetail.btn} style = {{marginLeft: "225px", marginTop: "-53px"}} onClick = {() => increase()}>+</button>

                        </div>
                        <Link to = {`${match.url}`}>
                        <button id = {productDetail.card} onClick = {() => count === 0? alert("You can't add zero amount!") :addToCart(item.id, item.prd_name, item.prd_description, item.prd_price, item.prd_img, item.prd_img2, item.category, count)}>
                            Add to shopping bag
                        </button>
                        </Link>
                        <div><br></br><br></br> </div>
                        <div id = {productDetail.textdescription}>{item.prd_description}</div> 
                        <ErrorBoundary>
                            <Comments id = {item.id}/>
                        </ErrorBoundary>
            
                    </div>
                </div>   
            }       
                
        </div>        
    
    )
}

