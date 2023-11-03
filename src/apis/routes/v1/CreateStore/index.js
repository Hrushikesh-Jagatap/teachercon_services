const express = require('express');

const router = express.Router();

const CreatestoreController = require('@root/src/apis/controllers/v1/CreateStore');
router.post('/store', async (req, res, next) => {
    try {
        const result = await CreatestoreController.createStore(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
