import { connectDB } from "../../../src/app/util/database";
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth'
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답){

    let session = await getServerSession(요청,응답,authOptions)
    
    if(요청.method == 'POST'){
         let parse = JSON.parse(요청.body)

         let 저장할거 = {
             comment: parse.comment,
             parent: new ObjectId(parse._id),
             author: session.user.email
         }
         console.log(저장할거)
        const db = (await connectDB).db('forum');
        let result = await db.collection('comment').insertOne(저장할거)

        return 응답.status(200).json('댓글작성완료')
    }
}