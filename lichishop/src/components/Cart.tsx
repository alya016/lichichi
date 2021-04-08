import React, { useEffect, useState } from 'react'
import 'react-medium-image-zoom/dist/styles.css'
import cartStyle from "../styles/Cart.module.css"
import axios from "../api/axios"
import commentStyle from "../styles/Comments.module.css"
export default function Cart() {

    const [data, setData] = useState<any[]>([])
    const [comments, setComments] = useState<any[]>([])

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("http://localhost:3000/cart")
            console.log(result.data)
            setData([... result.data])

            const res = await axios.get("http://localhost:3000/comments");
            console.log(res.data)
            setComments([... res.data])
        }
        fetchData();
    }, []);


    async function onDeleteHandle(id: number) {
        const res = await axios.delete(`http://localhost:3000/cart/${id}`);
        setData([... data.filter((d) => d.id != id)]);
    }

    
   


    const rendering = (

        <div id = {cartStyle.productDetailsCart}>
            {
                data.length === 0? <div id = {cartStyle.emptyBag}>Your bag is empty!</div>:

                data.map(item => (
                <div className = {cartStyle.detailsCart} key = {item.id}>
                   
                    <img
                        src={item.prd_img}
                        className={cartStyle.imageCart}
                        style={{ width: "20em"}}
                    />

                    
                    <div className={cartStyle.boxCart}>
                        <div className={cartStyle.rowCart}>
                            <h3>DESIGNED IN GERMANY</h3>
                            <h2>{item.prd_name}</h2>
                            <h3>Price: {item.count} * {item.prd_price} = ${item.prd_price * item.count}</h3>
                            <div id = {cartStyle.text}>{item.prd_description}</div>
                        </div>

                        <div>
                            <button id = {cartStyle.cardCart} onClick = {() => onDeleteHandle(item.id)}>
                                Remove from the cart
                            </button>                            
                        </div><br></br>
                        <div className = {cartStyle.commentsDisplay}> 
                            <h3 style = {{textAlign: "left", fontWeight: "normal"}}>Commentaries: </h3>
                            {comments.filter(cmt => cmt.prd_id === item.id).map(comment => (
                                <h3 key = {comment.id} className = {commentStyle.commentText} >
                                    {comment.name}
                                </h3>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )

    return (
        <div>
            {rendering}
        </div>
    )

}