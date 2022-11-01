const express = require("express");
const router = express.Router();

// different model routers
router.use("/post", require("./post"));
router.use("/user", require("./user"));
router.use("/friend", require("./friend"));
router.use("/like", require("./like"));
router.use("/comment", require("./comment"));

module.exports = router;