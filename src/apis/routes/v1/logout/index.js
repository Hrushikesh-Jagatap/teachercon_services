const express = require('express');

const router = express.Router();

const Getlogout = require('@controllers/v1/Getlogout')

router.get('/logout/:email',async(req, res, next) => {
    try {
        const result = await Getlogout.logout(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
