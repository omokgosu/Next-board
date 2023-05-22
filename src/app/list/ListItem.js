'use client'

import Link from 'next/link'
import { useEffect } from 'react';

export default function ListItem({result}){

    useEffect(()=>{
        console.log(result);
    },[])

    return (
        <div>
            {
                result.map(el =>{
                        return <li key={el._id} className="list-item">
                            <Link prefetch={false} href={`/detail/${el._id}`}>
                                <h4>{el.title}</h4>
                            </Link>
                            <Link href={'/edit/' + el._id}>수정</Link>
                            <button type="button" onClick={(e)=>{
                                fetch('/api/post/delete', {method : 'POST', body : el._id.toString() })
                                .then((r) => r.json())
                                .then(()=>{
                                     e.target.parentElement.style.opacity = 0;
                                     setTimeout(()=>{
                                        e.target.parentElement.style.display = 'none'
                                     },1000)
                                })
                            }}
                            >삭제</button>
                            <p>{el.content}</p>
                        </li>
                        }
                    )
            }
        </div>
    )
}