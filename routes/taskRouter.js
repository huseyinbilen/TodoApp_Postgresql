const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        console.log('hello world');
        return res.status(200).json({ message: 'Everything okay'});
    } catch (error) {
        return res.status(400).json({ message: error. message });
    }
});

module.exports = router;