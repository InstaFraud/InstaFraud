const express = require("express");
const router = express.Router();
const { Comment, Friend, Like, Post, User } = require("./Models");

router.post("/:id", async (req, res, next) => {
    try {
        ({commentedBy, commentContent} = req.body);
        const newComment = await Comment.create({commentedBy, commentContent});
        next(newComment);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const foundCommment = await Comment.findByPk(req.params.id);
        await Comment.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        const result = await Comment.findByPk(req.params.id);
        next(result);
    } catch (error) {
        next(error);
    }
})

module.exports = router;