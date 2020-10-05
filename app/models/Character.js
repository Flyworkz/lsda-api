const db = require('../database');

class Character {

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const characters = await db('/character');
        return characters;
    }
}

module.exports = Character;