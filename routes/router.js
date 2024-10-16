//importing required modules
const express = require('express')
const router = express.Router();
const homeController = require('../controllers/homeController')
const postController = require('../controllers/postController')

// main route
router.get('/', homeController)
// creating configure post route
router.post('/configure', postController)

module.exports = router;