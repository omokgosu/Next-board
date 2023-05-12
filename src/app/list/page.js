import { connectDB } from '../util/database';

export default async function List(){

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray()

    return(
        <ul className="list-bg">
            {
                result.map(el =>
                        <li key={el.id} className="list-item">
                            <h4>{el.title}</h4>
                            <p>{el.content}</p>
                        </li>
                    )
            }
        </ul>
    )
}