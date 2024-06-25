import { getQuery } from 'h3'; // Assuming this gets query parameters from event
import { readByBId } from '../../lib/firestore';

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event); 
    const doc = await readByBId(col as string, id as string);
    console.log("Read operation successful");
    return { result: doc };
  } catch (error) {
    return { error: (error as Error).message, message: "Read operation failed" };
  }
});
