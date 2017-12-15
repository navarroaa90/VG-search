var request = require('request');

function getCharacterData(req, res) {
    var name = req.body.name;
     // var url = `https://www.giantbomb.com/api/characters/?api_key=${process.env.GIANTBOMB_KEY}&format=json&filter=name:zelda`
    var baseUrl = `https://www.giantbomb.com/api/characters/?api_key=${process.env.GIANTBOMB_KEY}&format=json`;
    var filters = '&filter=name:' + name;
    var fieldList = '&field_list=name,id,image,deck,first_appeared_in_game'

    var url = baseUrl + filters + fieldList;

    request(
        {
            url: url,
            headers: {
                'User-Agent': 'request'
            }
        },
        (err, response, body) => {
            if (err) {
                console.log('err =', err);
                res.status(400).json('cant perform query');
            }

            console.log('body =', body)

            var parsedBody = JSON.parse(body)

            return res.json(parsedBody.results)

        }
    );
}

module.exports = {
    getCharacterData
}

