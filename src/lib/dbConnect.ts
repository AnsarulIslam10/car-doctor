import { MongoClient, ServerApiVersion } from "mongodb";

export default function dbConnect(collectionName: string) {
    const uri: string = process.env.MONGODB_URI ?? ""; // Provide a fallback empty string

    if (!uri) {
        throw new Error("MONGODB_URI is not defined. Please set it in your environment variables.");
    }

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    return client.db(process.env.DB_NAME).collection(collectionName)
}
