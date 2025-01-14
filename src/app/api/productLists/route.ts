import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const connectDatabase = async () => {
  const client = new MongoClient(process.env.MONGODB_URI || "");
  await client.connect();
  return client;
};

console.log(connectDatabase);

export async function GET() {
  try {
    const client = await connectDatabase();
    const db = client.db("FurniroDatabase");

    const products = await db.collection("FurniroProducts").find().toArray();
    return NextResponse.json({ products: products });
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
