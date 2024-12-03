const express = require('express');
const router = express.Router();

const rke143Data = require('../data/nodejs.json');

router.post('/', (req, res) => {
    
    if (req.body.username !== 'rke' || req.body.code !== '143') {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ rke143Data });
});

module.exports = router;
