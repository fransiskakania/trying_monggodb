const express = require('express');
const router = express.Router();
const { getAllInfo, createInfo } = require('../controllers/info.controller');

router.get('/info', getAllInfo);
router.post('/create', createInfo);

module.exports = router;