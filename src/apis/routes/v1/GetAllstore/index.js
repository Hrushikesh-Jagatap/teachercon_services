const express = require('express');

const router = express.Router();

const Getstoredata = require('@controllers/v1/GetAllstore')

router.get('/store', async (req, res, next) => {  
    try {
        const data = await Getstoredata.store(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
