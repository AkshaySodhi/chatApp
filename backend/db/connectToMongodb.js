import mongoose from "mongoose";

const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connecyed to mongodb");
  } catch (error) {
    console.log("error connecting to mongodb", error.message);
  }
};

export default connectToMongodb;
