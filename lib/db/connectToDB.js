import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  return await MongoClient.connect(
    "mongodb+srv://abdalfadeelh:KJCKbjKIJQBTUupu@cluster0.4czxmst.mongodb.net/store?retryWrites=true&w=majority"
  );
};
