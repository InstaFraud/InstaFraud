const express = require('express');
const router = express.Router();
const { Publication } = require("../Models/Publication");

router.get("/", async (req, res, next) => {
    try {
        const posts = await Publication.findAll();

        res.json(posts);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res) => {
    res.json(await Publication.findByPk(req.params.id))
});

router.post('/', async (req, res) => {
    await Publication.create(req.body);
    res.send("Post Created!");
});

router.put('/:id', async (req, res) => {
    await Publication.update(req.body, {
        where: {id: req.params.id}
    });
    res.send("Post Updated!")
});

router.delete('/:id', async (req, res) => {
    await Publication.destroy({
        where: {id: req.params.id}
    });
    res.json("Post Deleted!")
});

module.exports = router;