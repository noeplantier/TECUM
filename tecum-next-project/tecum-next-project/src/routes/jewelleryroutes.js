const express = require('express');
const router = express.Router();
const { getJewellery, addJewellery } = require('../controllers/jewellerycontroller');
const authMiddleware = require('../security/authMiddleware');

router.get('/', getJewellery);
router.post('/add', authMiddleware, addJewellery);

module.exports = router;
