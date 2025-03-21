import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { User } from "next-auth"; // Importing the User type from next-auth
import { WithId, Document } from "mongodb"; // Import MongoDB types

interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (payload: LoginPayload): Promise<User | null> => {
  const { email, password } = payload;

  const userCollection = dbConnect(collectionNamesObj.userCollection);
  const user: WithId<Document> | null = await userCollection.findOne({ email });

  if (!user) return null;

  // Directly compare the stored password with the provided password
  if (user.password !== password) return null;

  // Rename _id to id and cast the document to the User type
  const userWithId = { ...user, id: user._id.toString() }; // MongoDB _id is an ObjectId, so we convert it to a string

  return userWithId as User;
}
