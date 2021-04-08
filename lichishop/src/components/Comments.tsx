import React, { ReactElement, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import axios from "../api/axios"
import commentStyle from "../styles/Comments.module.css"

interface Props {
    id: number
}

export default function Comments({id}: Props): ReactElement {

    const [comment, setComment] = useState("")
    const [data, setData] = useState<any[]>([])
    const [product, setProduct] = useState<any[]>([])
    const match = useRouteMatch<{prodId: any}>()
    const prodID = match.params.prodId;

    if( comment=="Nigga" || comment=="Hate chinese models"){
        throw new Error("Obscene language is against our policy");
    }

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("http://localhost:3000/products");
            console.log(result.data)
            setProduct([... result.data])
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("http://localhost:3000/comments");
            console.log(result.data)
            setData([... result.data])
        }
        fetchData();
    }, [])

    async function onClickHandle(id: number){
        if(comment === ""){
            alert("Blank Space!");
            return;
        }
        const model = {
            name: comment,
            prd_id: id
        }
        const res = await axios.post("http://localhost:3000/comments", model)
        console.log(res)
        setComment("")
        window.location.reload();
    }

    async function onDeleteHandle(id: number) {
        const res = await axios.delete(`http://localhost:3000/comments/${id}`)
        setData([... data.filter(d => d.id != id)])
    }

    async function onChangeHandle(id: number, text: string) {
        if(text === ""){
            return;
        }
        const model = data.find(d => d.id === id)
        model.id = id
        model.name = text
        const res = await axios.patch(`http://localhost:3000/comments/${id}`, model)
        setData([... data])
        setComment("")
    }

    return (
        <div>
            <div className = {commentStyle.comment}>
                <input style = {{width: "300px"}} type="text"
                value = {comment}
                onChange = {(e) => setComment(e.target.value)}
                />
                <button id = {commentStyle.addComment} onClick = {() => onClickHandle(id)}>Add</button>
            </div>
            {data.filter((prd) => prd.prd_id == prodID).map((d) => (
                <React.Fragment key = {d.id}>
                    <h3 id = {commentStyle.commentText}> {d.name}</h3>
                    <button className = {commentStyle.btn} style = {{ padding: "5px 20px"}} onClick = {() => onDeleteHandle(d.id)}>Delete</button>&nbsp;&nbsp;
                    <button  className = {commentStyle.btn} style = {{ padding: "5px 20px",  marginLeft: "100px" }} onClick = {() => onChangeHandle(d.id, comment)}>Edit</button>
                </React.Fragment>
            ))}
        </div>
    )
}
