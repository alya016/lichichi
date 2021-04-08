import React, {useEffect, useMemo, useRef, useState} from 'react';
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'
import product from "../styles/Products.module.css"
import HoverImage from 'react-hover-image'
import axios from "../api/axios"


export default function NewClothes(): ReactElement {


    const [data, setData] = useState<any[]>([])
    const newProducts = useMemo(() => data.filter(item => item.id >= data.length - 10), [data])
    const [value, setValue] = useState("");
    const timerHandler = useRef();


    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("http://localhost:3000/products")
            console.log(result)
            setData([... result.data])
        }
        fetchData();
    }, []);


    return (
        <div id = {product.product}>

            {newProducts.map(item =>(
                <div className={product.card} key = {item.prd_id}>
                    <Link to = {`${'categories'}/${item.category}/${'products'}/${item.prd_id}`} >
                        <HoverImage className = {product.prdImages} src ={item.prd_img} hoverSrc ={item.prd_img2}></HoverImage>
                    </Link>

                    <div className={product.content}>
                        <h3>{item.prd_name}</h3>
                        <span className = {product.price}>${item.prd_price}.00</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
