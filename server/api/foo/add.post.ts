import {getQuery,readBody  } from 'h3';
import {add} from "../../lib/firestore"
export default defineEventHandler(async(event)=>{
  try{
    const query = getQuery(event)
    const body = await readBody(event)
    const docRef = await add(query.col as string,body);
    console.log("add",body)

    return {result :docRef}
  }catch(error){
    return { error: (error as Error).message , message: "add" };
  }
})
