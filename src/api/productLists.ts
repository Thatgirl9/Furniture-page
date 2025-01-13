import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const connectDatabase = async () => {
const client = new MongoClient(process.env.MONGODB_URI || '') 
await client.connect();
return client; 
}

export default async function productLists(req:NextApiRequest, res:NextApiResponse) {
try {
  const client = await connectDatabase();
  const db = client.db();

  const products = await db.collection('FurniroProducts').find().toArray();
  res.status(200).json({products: products});
  
} catch(err) {
  console.error('Error fetching products:', err);
  res.status(500).json({ err: 'Failed to fetch products' });
}

}