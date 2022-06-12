import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    }
});

const PostModel = mongoose.model("posts", PostSchema);
export default PostModel;

