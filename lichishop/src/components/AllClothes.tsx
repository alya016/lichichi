import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import { ReactElement } from 'react'
import { getProduct } from "../actions/productActions"
import axios from "../api/axios"
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../store';
import search from "../styles/Search.module.css"
import product from "../styles/Products.module.css"
import HoverImage from 'react-hover-image/build';
import Products from './Products';

export default function AllClothes(): ReactElement {

    const [data, setData] = useState<any[]>([])
    const match = useRouteMatch<{prodId: any}>()
    const productState = useSelector((state: RootStore) => state.productSearch)
    const [productName, setProduct] = useState("")
    const [comments, setComments] = useState<any[]>([])
    const dispatch = useDispatch()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setProduct(event.target.value) 
    const handleSubmit = () => {
        dispatch(getProduct(productName))
    }
    const [bag, setBag] = useState<any[]>([])
    const [count, setCount] = useState(0);

    console.log(productState.product)

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

    const increase = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrease = () => {
        setCount(prevCount => prevCount <= 0? prevCount = 0: prevCount = prevCount - 1)
    }

    console.log( productState.product?.length )

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("http://localhost:3000/products")
            setData([... result.data])

            const basket = await axios.get("http://localhost:3000/cart")
            setBag([... basket.data])

            const res = await axios.get("http://localhost:3000/comments");
            setComments([... res.data])
        }
        fetchData();
    }, []);

    return (
        <div >
            <div style = {{ textAlign: "center", marginRight: "120px", marginTop: "40px"}}>
            <input id = {search.input} type="text" onChange = {handleChange}/>
            <button id = {search.submit} onClick = {handleSubmit}>Search</button>
            </div>
            
                 
                     
                        {
                            productState.product?.length == 0? <div id = {product.product} style = {{marginTop: "30px"}}>
                            {
                                data.map(item =>(
                                    
                                <div className={product.card} key = {item.id}>
                    
                                    <Link to = {`${match.url}/${item.id}`} >
                                        <HoverImage className = {product.prdImages} src ={item.prd_img} hoverSrc ={item.prd_img2}></HoverImage>
                                    </Link>
                    
                                    <div className={product.content}>
                                        <h3>
                                            <Link to = {`${match.url}/${item.id}`}>{item.prd_name}</Link>
                                        </h3>
                                        <span className = {product.price}>${item.prd_price}.00</span>
                                    </div>
                                    <div>Reviews:&nbsp;
                                    {comments.filter(cmt => cmt.prd_id === item.id).length}
                                    </div>
                                </div>
                            ))}
                        </div> :
                            <div id = {product.product} style = {{marginTop: "30px"}}>{
                            productState.product.map(item => (
                                <div className={product.card} key = {item.id}>

                                <Link to ={`categories/1/products/${item.id}`} >
                                    <HoverImage className = {product.prdImages} src ={item.prd_img} hoverSrc ={item.prd_img2}></HoverImage>
                                </Link>

                                <div className={product.content}>
                                    <h3>
                                        <Link to = {`categories/1/products/${item.id}`}>{item.prd_name}</Link>
                                    </h3>
                                    <span className = {product.price}>${item.prd_price}.00</span>
                                </div>
                                <div>Reviews:&nbsp;
                                {comments.filter(cmt => cmt.prd_id === item.id).length}
                                </div>
                                </div> 
    
                            ))}
                            </div>
                        }

                            
        
        </div>
    )
}
