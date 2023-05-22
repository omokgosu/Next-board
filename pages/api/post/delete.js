import { connectDB } from "../../../src/app/util/database"
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == 'POST'){
     

      let db = (await connectDB).db('forum') 
      let result = await db.collection('post').deleteOne({_id : new ObjectId(요청.body)});
      
      응답.status(200).redirect('/list')
  }
}