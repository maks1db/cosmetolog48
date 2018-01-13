const requestController = require('../controllers/requestController');
const express  = require('express');

const router = express.Router();

router.post('/send', requestController.send);

module.exports = router;