const { Router } = require('express');
const characterController = require('./controllers/charactercontroller');

const router = Router();

/**
 * Récupère tous les personnages de l'univers du Seigneur des Anneaux
 * @route GET /character
 * @group character - Les routes concernant les personnages
 * @returns {JSON} 200 - Tous les personnages
 */
router.get('/character', characterController.findAll);

/**
 * Récupère le personnage de l'univers du Seigneur des Anneaux par son nom
 * @route GET /character/:name
 * @group character - Les routes concernant les personnages
 * @returns {JSON} 200 - Le personnage demandé
 */
router.get('/character/:name', characterController.findByName);

module.exports = router;