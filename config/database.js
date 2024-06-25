import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if database is already connected, don't connect again

  if (connected) {
    console.log("Mongodb is already connected...");
    return;
  }

  //connecte to mongodb
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
    console.log("Mongodb connected...")
  } catch (error) {
    console.log(error);
  }
};

export default connectDB
