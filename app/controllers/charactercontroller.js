const Character = require('../models/Character');

const characterController = {

    findAll: async (req, res) => {
        res.json(await Character.findAll());
    }

}

module.exports = characterController;