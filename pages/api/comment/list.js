import { connectDB } from "../../../src/app/util/database";
import { ObjectId } from "mongodb";

export default async function handelr(요청,응답){

    console.log(요청.query)
    const db = (await connectDB).db('forum');
    let result = await db.collection('comment').find({
        parent: new ObjectId(요청.query.id)
    }).toArray()

    응답.status(200).json(result)

   return
}