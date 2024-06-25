import { getQuery } from 'h3';
import { del } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    await del(query.col as string, query.id as string);
    console.log("delete")
    return { result: query.id };
  } catch (error) {
    return { error: (error as Error).message 
      , message: "delete"
    };
  }
});
