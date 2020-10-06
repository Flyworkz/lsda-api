const fetch = require('node-fetch');

const db = async (route) => {
    // Clé API => https://the-one-api.dev/
    const apiKey = 'HyvM5P1IzTmqirb8-2KC';

    // Passage de la clé API dans les headers
    const response = await fetch(`https://the-one-api.dev/v2${route}`,{
        headers:{
            Authorization: `Bearer ${apiKey}`
        }
    });
    
    // Retourne directement un tableau d'objet contenu par défaut dans la propriété docs de l'objet récupéré depuis l'API
    return (await response.json()).docs;
}

module.exports = db;