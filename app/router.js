const { Router } = require('express');
const characterController = require('./controllers/charactercontroller');

const router = Router();

router.get('/character', characterController.findAll);

router.get('/character/:name', characterController.findByName);

module.exports = router;