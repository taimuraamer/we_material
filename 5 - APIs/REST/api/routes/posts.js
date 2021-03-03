const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message: err})
    }
});

router.get("/:postID", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID)
        res.json(post)
    } catch (error) {
        res.json({ message: error });
    }
    
})

router.delete("/:postID", async (req, res) => {
    try {
        const removed = await Post.remove({_id: req.params.postID})
        res.json(removed)
    } catch (error) {
        res.json({ message: error });
    }
})

router.patch("/:postID", async (req, res) => {
    try {
        const updated = await Post.updateOne({_id: req.params.postID}, {$set: {title: req.body.title}})
        res.json(updated)
    } catch (error) {
        res.json({ message: error });
    }
})

// router.get("/specific", (req, res) => {
//     res.send("Specific post");
// });

router.post("/", async (req, res) => {
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    await post
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    }
    catch(err) {
        res.json({message: err})
    }
    
});

module.exports = router;
