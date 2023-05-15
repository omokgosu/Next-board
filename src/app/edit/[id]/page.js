import { connectDB } from '../../util/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props){

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({
        _id : new ObjectId(props.params.id)
    })

    await db.collection('post').updateOne({수정할게시물정보},{
        $set: {
            title: '바보',
            content: '천재'
        }
    })

    return (
        <div className="p-20">
            <h4>수정페이지</h4>

            <form action="/api/post/new" method="POST">
                <input name="title" type="text" placeholder="글제목" defaultValue={result.title}/>
                <input name="content" type="text" placeholder="글내용" defaultValue={result.content}/>
                <button type="submit">글수정버튼</button>
            </form>
        </div>
    )
}