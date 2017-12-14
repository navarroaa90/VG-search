var request = require('request');

function getCharacterData (req, res) {
    var body = req.body;
    return res.json('hello')

    request({ url: `https://www.giantbomb.com/api/character/[guid]/?api_key=${process.env.GIANTBOMB_KEY}&name=${body.name}`}, (err, response, body) => {
    var searchResults = JSON.parse(body);
    if (searchResults.status === 400) {
        return res.json(searchResults).status(404);
    }
 });
}

module.exports = {
    getCharacterData
}