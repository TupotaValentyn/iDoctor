const express = require('express');
const router = express.Router();

const UserCntrl = require('../controllers/user');
const PharmacyCntrl = require('../controllers/pharmacy');

router.post('/user/reg', UserCntrl.reg);
router.post('/pharmacy/near', PharmacyCntrl.near);
router.get('/pharmacy/simptoms', PharmacyCntrl.simptoms);
router.post('/pharmacy/simptoms', PharmacyCntrl.Postsimptoms);
router.post('/pharmacy/appointment', PharmacyCntrl.appointment);

module.exports = router;