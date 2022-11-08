const express = require("express");
const router = express.Router();

router.use('/posts', require('./Publications'));

module.exports = router;