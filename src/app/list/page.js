import { connectDB } from '../util/database';
import ListItem from './ListItem';

export const dynamic = 'force-dynamic'

export default async function List(){

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray()
    result = result.map(item => ({
        _id: item._id.toString(),
        title: item.title,
        content: item.content
    }));
    return(
        <ul className="list-bg">
            <ListItem result={result}/>
        </ul>
    )
}