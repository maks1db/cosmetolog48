const mainController = require('../controllers/mainController');
const express  = require('express');

const router = express.Router();

router.get('/galleryItems', mainController.galleryItems);

module.exports = router;