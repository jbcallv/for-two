import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;