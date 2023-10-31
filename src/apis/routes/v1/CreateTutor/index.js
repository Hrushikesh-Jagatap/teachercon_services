const express = require('express');

const router = express.Router();

const CreateturtorController = require('@root/src/apis/controllers/v1/CreateTutor');
router.post('/tutor', async (req, res, next) => {
    try {
        const result = await CreateturtorController.createTutor(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
