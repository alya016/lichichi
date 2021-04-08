import  React, { useEffect, useState } from 'react'
import { Link,  useRouteMatch } from 'react-router-dom'
import { ReactElement } from 'react'
import product from "../styles/Products.module.css"
import HoverImage from 'react-hover-image'
import axios from '../api/axios'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../store'
import { listProduct } from '../actions/productActions'



export default function Products(): ReactElement {

    const match = useRouteMatch<{id: any}>()
    const category = match.params.id;
    const [comments, setComments] = useState<any[]>([])
    
    const dispatch = useDispatch()
    const productState = useSelector((state: RootStore) => state.productList)

    console.log(productState.products)
     
    useEffect(() => {

        async function fetchData() {
            const result = await axios.get("http://localhost:3000/comments");
            console.log(result.data)
            setComments([... result.data])
        }
        dispatch(listProduct())
        fetchData();
    }, [])

    return (
        
        <div id = {product.product}>
        {
            productState.products.filter(item => item.category == category).map(item =>(
                
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
    </div>
    );
}

