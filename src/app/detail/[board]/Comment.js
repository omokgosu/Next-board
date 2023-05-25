'use client'
import { useState , useEffect } from "react"

export default function Comment(props){
    
    const [comment , setComment] = useState('')
    const [data, setData ] = useState([])

    useEffect(()=>{
        fetch(`/api/comment/list?id=${props._id}`)
        .then(r => r.json())
        .then(result=>{
            setData(result);
        })
    },[])

    return (
        <div>
            <div>댓글목록 보여줄 부분</div>
            <ul>
                {   data.length > 0 &&
                    data.map((a,i)=>{
                        return (
                            <li key={a.comment}>
                                <p>{i+1} {a.comment}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <input onChange={(e)=> setComment(e.target.value)}/>
            <button type="button" onClick={()=>{
                fetch('/api/comment/new', {method: 'POST', body: JSON.stringify({
                    comment: comment,
                    _id: props._id
                })}).then(console.log('성공'))
            }}>댓글전송</button>
        </div>
    )
}