import mongoose from "mongoose";

const mongodbURL =
  "mongodb+srv://leariningcourses:XBFOjDECDm1QW5LH@cluster0.g7ev917.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("MongoDB connection error:", error);
});

db.on("connected", () => {
  console.log("MongoDB connected successfully");
});

export default db;
