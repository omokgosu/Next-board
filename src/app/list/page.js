import Link from 'next/link';
import { connectDB } from '../util/database';
import DetailLink from './DetailLink';

export default async function List(){

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray()

    return(
        <ul className="list-bg">
            {
                result.map(el =>{
                        return <li key={el._id} className="list-item">
                            <Link prefetch={false} href={`/detail/${el._id}`}>
                                <h4>{el.title}</h4>
                            </Link>
                            <Link href={'/edit/' + el._id}>수정</Link>
                            <p>{el.content}</p>
                        </li>
                        }
                    )
            }
        </ul>
    )
}