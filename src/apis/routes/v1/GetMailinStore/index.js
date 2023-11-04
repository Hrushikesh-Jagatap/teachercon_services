const express = require('express');

const router = express.Router();

const GetmailinStore = require('@controllers/v1/GetMailinStore')

router.get('/store/:email', async (req, res, next) => {  
    try {
        const data = await GetmailinStore.mailinstore(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
