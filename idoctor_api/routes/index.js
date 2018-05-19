const express = require('express');
const router = express.Router();

const UserCntrl = require('../controllers/user');
const PharmacyCntrl = require('../controllers/pharmacy');

router.post('/user/reg', UserCntrl.reg);
router.get('/pharmacy/near', PharmacyCntrl.near);

module.exports = router;