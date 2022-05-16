const express = require('express');

const getTypes = require('../Controllers/getTypes');
const router = express.Router();

router.get("/", getTypes);

module.exports = router;