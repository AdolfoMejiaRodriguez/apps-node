const express = require('express');
const router = express.Router();

router.get('/user/signin', (req, res) => {
    res.send('Iniciar sesion');
});

router.get('/user/signup', (req, res) => {
    res.send('Registro de usuario');
});

module.exports = router;