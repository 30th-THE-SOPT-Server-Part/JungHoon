import mongoose from "mongoose";
import { BlogInfo } from "../interfaces/blog/BlogInfo";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    writer: {
        name: { type: String }
    },
    context: {
        type: String,
        required: true
    },
    createdAt: {
        type: new Date()
    },
    updatedAt: {
        type: new Date()
    }
});

export default mongoose.model<BlogInfo & mongoose.Document>("Blog", BlogSchema);