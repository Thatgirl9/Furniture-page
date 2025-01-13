// import { MongoClient } from 'mongodb';
// import { NextResponse } from "next/server";

// const connectDatabase = async () => {
// const client = new MongoClient(process.env.MONGODB_URI || '') 
// await client.connect();
// return client; 
// }

// export async function GET() {
// try {
//   const client = await connectDatabase();
//   const db = client.db();

//   const products = await db.collection('FurniroProducts').find().toArray();
//   return NextResponse.json(products);
//   // res.status(200).json({products: products});
  
// } catch(err) {
//   console.error('Error fetching products:', err);
//   return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
// }

// }