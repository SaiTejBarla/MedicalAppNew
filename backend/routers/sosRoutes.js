const express = require('express');
const { sendSOSAlert } = require('../controllers/sosController');
const router = express.Router();

router.post('/alert', sendSOSAlert);

module.exports = router;