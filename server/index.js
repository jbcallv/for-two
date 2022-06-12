import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';

import UserModel from './models/User.js';
import PostModel from './models/Post.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://admin:cL8ks680JCzA1phM@cluster0.fcj31.mongodb.net/fortwodb?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.get("/getPosts", (req, res) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createPost", async (req, res) => {
    const post = req.body;
    const newPost = PostModel(post);
    await newPost.save();

    res.json(post);
});

app.listen(3001, () => {
    console.log("Server is running");
});