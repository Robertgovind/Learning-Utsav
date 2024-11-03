import mongoose from "mongoose";
import "dotenv/config";

export default async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log(`Connected to the database`);
    })
    .catch((err) => {
      console.log(`Error occured while connecting to database`);
    });
};
