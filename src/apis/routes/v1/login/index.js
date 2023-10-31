const express = require('express');

const router = express.Router();

const Getlogin = require('@controllers/v1/Getlogin')

router.get('/login',async(req, res, next) => {
    try {
        const result = await Getlogin.login(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
