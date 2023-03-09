import { connectToDatabase } from "@/lib/db/connectToDB";
import { hashPassword } from "@/lib/auth";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim("") === ""
    ) {
      res.status("403").json({ message: "Invalid user inputs!" });
      return;
    }
    let client;
    try {
      client = await connectToDatabase();
    } catch (err) {
      res.status(403).json({ message: "Cannot connect to database!" });
      return;
    }

    const db = client.db();
    const existingEmail = await db.collection("users").findOne({ email });

    if (existingEmail) {
      res.status(403).json({ message: "Email is already exists!" });
      client.close();
      return;
    }
    const hashedPassword = await hashPassword(password);
    try {
      const result = await db.collection("users").insertOne({
        email,
        password: hashedPassword,
      });
    } catch (err) {
      res.status(401).json({ message: "Cannot connect to database!" });
      client.close();
      return;
    }
    res.status(201).json({ message: "Email created successfully!" });
    client.close();
  }
};

export default handler;
