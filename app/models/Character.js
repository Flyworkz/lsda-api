const db = require('../database');

class Character {

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const characters = (await db('/character')).docs;
        return characters;
    }

    static async findByName(name) {
        const characters = (await db('/character')).docs;        
        const character = characters.find(c => c.name === name);
        return character;
    }
}

module.exports = Character;