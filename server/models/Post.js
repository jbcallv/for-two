import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    datePosted: {
        type: String, // change to Date later
        required: true
    },
    postedBy: {
        type: String,
        required: true
    }
});

const PostModel = mongoose.model("posts", PostSchema);
export default PostModel;

