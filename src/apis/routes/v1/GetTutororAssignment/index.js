const express = require('express');

const router = express.Router();

const Gettutordata = require('@controllers/v1/GetTutororAssignment')

router.get('/get/tutororassignment/:want', async (req, res, next) => {  
    try {
        const data = await Gettutordata.tutor(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
