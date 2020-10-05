const { findByName } = require('../models/Character');
const Character = require('../models/Character');

const characterController = {

    findAll: async (req, res) => {
        res.json(await Character.findAll());
    },

    findByName: async (req, res) => {
        res.json(await Character.findByName(req.params.name));
    }

}

module.exports = characterController;