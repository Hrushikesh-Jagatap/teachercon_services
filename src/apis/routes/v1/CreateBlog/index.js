const express = require('express');

const router = express.Router();

const CreateblogController = require('@root/src/apis/controllers/v1/CreateBlog');
router.post('/blog', async (req, res, next) => {
    try {
        const result = await CreateblogController.createBlog(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
