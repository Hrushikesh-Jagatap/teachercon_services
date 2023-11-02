const express = require('express');

const router = express.Router();

const Getstore = require('@controllers/v1/getstoredatawithfilter');

router.get('/get/store', async (req, res, next) => {  
    try {
        const data = await Getstore.getstoredatawithfilter(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
