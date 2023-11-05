const express = require('express');
const router = express.Router();
const updateStatusController = require('@controllers/v1/updateStatus1');
router.put('/status/accept/:id', async (req, res) => {
    try {
        const result = await updateStatusController.updatestatus(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;
