import { readGer } from  '../../lib/firestore';
import { getQuery } from 'h3'; // Assuming this get

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event); 
    const doc = await readGer(col as string, id as string);
    console.log("Read operation successful");
    return { result: doc };
  } catch (error) {
    return { error: (error as Error).message, message: "Read operation failed" };
  }
});
