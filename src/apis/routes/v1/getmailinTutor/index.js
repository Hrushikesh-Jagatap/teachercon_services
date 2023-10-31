const express = require('express');

const router = express.Router();

const GetmailinTutor = require('@controllers/v1/getmailinTutor')

router.get('/owntutor/:email', async (req, res, next) => {  
    try {
        const data = await GetmailinTutor.mailintutor(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
