import mongoose from "mongoose";
export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("mongodb Already connected");
    return;
  }

  try {
    const connection = mongoose.connect(process.env.MONGO_URI!, {
      dbName: "Portfolio_Blog",
    });

    console.log("Mongodb connected siceessfully");
    return connection;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
