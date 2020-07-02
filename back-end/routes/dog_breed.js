const express = require('express');
const request = require("request");
const router = express.Router();

router.get('/dog_breed', function(req, res, next) {
    let url_ac = 'https://dog.ceo/api/breed/' + req.query.breed + '/images/random';
    const options = {
        method: 'GET',
        url: url_ac,
        headers: {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.render('dog_breed', {breed_req : response.body});
    });
});




module.exports = router;


