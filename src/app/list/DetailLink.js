'use client'

import { useParams , useRouter} from "next/navigation";

export default function DetailLink(){

    let router = useRouter();
    let a= useParams();
    console.log(a)
    return (
        <button onClick={()=>{}}>버튼</button>
    )
}