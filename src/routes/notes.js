const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('Notas del usuario');
});

module.exports = router;