import { getQuery } from 'h3';
import { del, queryByCollection } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
   const doc = await queryByCollection(query.col as string)
    return { result: doc};
  } catch (error) {
    return { error: (error as Error).message };
  }
});
