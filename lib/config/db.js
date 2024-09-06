import mongoose from "mongoose";

export const ConnectDB = async() => {
    await mongoose.connect('mongodb+srv://Shubhradeep:Hanumanj@cluster0.v3bpg.mongodb.net/job-blog-app');
    console.log("BD Connected!");
}

