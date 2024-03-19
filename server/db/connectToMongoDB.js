import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MONGODB");
    } catch (error) {
        console.log(`Error in connection of MONGODB ${error}`);
    }
}

export default connectToMongoDB;