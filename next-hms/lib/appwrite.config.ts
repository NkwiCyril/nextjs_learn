import * as sdk from "node-appwrite";

export function createAppwriteClient() {
  const client = new sdk.Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!)
    .setKey(process.env.NEXT_PUBLIC_API_KEY!);

  return {
    client,
    databases: new sdk.Databases(client),
    users: new sdk.Users(client),
    messaging: new sdk.Messaging(client),
    storage: new sdk.Storage(client),
  };
}
