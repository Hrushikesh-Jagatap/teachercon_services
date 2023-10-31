const express = require('express');

const router = express.Router();

const CreateuserController = require('@root/src/apis/controllers/v1/CreateUser');

router.post('/signup', async (req, res, next) => {
    try {
        const result = await CreateuserController.createUser(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
