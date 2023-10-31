const express = require('express');

const router = express.Router();

const GetOnlineOrHome = require('@controllers/v1/GetOnlineOrHome')

router.get('/get/onlineorhome/:Meeting_options', async (req, res, next) => {  
    try {
        const data = await GetOnlineOrHome.tutor(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
