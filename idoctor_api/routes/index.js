const express = require('express');
const router = express.Router();

const UserCntrl = require('../controllers/user');

router.post('/user/reg', UserCntrl.reg);

module.exports = router;