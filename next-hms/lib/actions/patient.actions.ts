import { ID, Query } from "node-appwrite";
import { createAppwriteClient } from "../appwrite.config";
import { email } from "zod";

const { users } = createAppwriteClient();

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return newUser;
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return documents?.users[0];
    }
  }
};
