const express = require('express');

const router = express.Router();

const Getblogdata = require('@controllers/v1/GetallBlog')

router.get('/blog', async (req, res, next) => {  
    try {
        const data = await Getblogdata.blog(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
