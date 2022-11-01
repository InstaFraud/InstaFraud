const express = require("express");
const router = express.Router();
const { Post, User, Like, Comment, Friend } = require("./models");

router.get("/:id", async (req, res, next) => {
    try {
        const post = await Post.findByPk(req.params.id)
    } catch (error) {
        next(error);
    }
})

router.get("/", async (req, res, next) => {
    try {
        const post = await Post.findAll()
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id,
            },
        })
    } catch (error) {
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {
        ({ image, time, description } = req.body);
        const newPost = await Post.create({ image, time, description});
        next(newPost);
    } catch (error) {
        next(error);
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        await Post.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
        const result = await Post.findByPk(req.params.id);
        next(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;