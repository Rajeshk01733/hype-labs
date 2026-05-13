import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("MONGO_URL is missing in .env");
    }

    await mongoose.connect(mongoUrl);

    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Error: ", error);
  }
};

mongoose.connection.on("error", (error) => {
  console.error("Mongoose Connection Error: ", error);
});
