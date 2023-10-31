const express = require('express');

const router = express.Router();

const Getsubjectandlocation = require('@controllers/v1/GetSubjectandlocation')

router.get('/get/subjectandlocation', async (req, res, next) => {  
    try {
        const data = await Getsubjectandlocation.Getsubjectandlocation(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
