const express = require('express');
const controller = require('../controllers/feedback');
const router = express.Router();

// localhost:8081/api/feedback
router.post('/', controller.create);

module.exports = router;