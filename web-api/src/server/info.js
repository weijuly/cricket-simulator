import express from 'express';
import moment from 'moment';
import os from 'os';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        host: os.hostname(),
        date: moment().toISOString()
    });
});

module.exports = router;