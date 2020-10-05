const fetch = require('node-fetch');

const db = async (route) => {
    const apiKey = 'HyvM5P1IzTmqirb8-2KC';
    const response = await fetch(`https://the-one-api.dev/v2${route}`,{
        headers:{
            Authorization: `Bearer ${apiKey}`
        }
    });
    return (await response.json()).docs;
}

module.exports = db;