"use server";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

// Define a type for the user payload
interface User {
    name: string;
    email: string;
    password: string;
}

interface RegisterUserResponse {
    insertedId: string;
    acknowledged: boolean;
}

export const registerUser = async (payload: User): Promise<RegisterUserResponse | null> => {
    const userCollection = dbConnect(collectionNamesObj.userCollection);

    // Validation
    const { email, password } = payload;
    if (!email || !password) return null;

    const user = await userCollection.findOne({ email: payload.email });

    if (!user) {
        // No hashing needed, store the password as it is
        const result = await userCollection.insertOne(payload);

        return { insertedId: result.insertedId.toString(), acknowledged: result.acknowledged };
    }

    return null;
};
